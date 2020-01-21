import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK, AUTH_ERROR, AUTH_GET_PERMISSIONS } from "react-admin"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const baseConfig = {
  userProfilePath: "users",
  userAdminProp: "isAdmin",
  localStorageTokenName: "token",
  localStorageRoleId: "roleId",
  permissionsCollection: "roles",
  permissions: "permissions",
  handleAuthStateChange: async (auth, config) => {
    if (auth) {
      const snapshot = await firebase
        .firestore()
        .collection(config.userProfilePath)
        .doc(auth.user.uid)
        .get()

      let profile = snapshot.data()
      if (profile) {
        const firebaseToken = await auth.user.getIdToken()
        let user = { auth, profile, firebaseToken }
        localStorage.setItem(config.localStorageTokenName, firebaseToken)
        localStorage.setItem(config.localStorageRoleId, profile.role)

        return user
      } else {
        firebase.auth().signOut()
        localStorage.removeItem(config.localStorageTokenName)
        localStorage.removeItem(config.localStorageRoleId)
        throw new Error("sign_in_error")
      }
    } else {
      localStorage.removeItem(config.localStorageTokenName)
      throw new Error("sign_in_error")
    }
  }
}

const permissions = async roleId => {
  const snapshot = await firebase
    .firestore()
    .collection("roles")
    .doc(roleId)
    .get()
  return snapshot.data()
}

export default () => {
  const config = baseConfig
  const firebaseLoaded = () =>
    new Promise(resolve => {
      firebase.auth().onAuthStateChanged(resolve)
    })

  return async (type, params) => {
    if (type === AUTH_LOGOUT) {
      config.handleAuthStateChange(null, config).catch(() => {})
      localStorage.removeItem(config.localStorageTokenName)
      localStorage.removeItem(config.localStorageRoleId)
      localStorage.removeItem(config.permissions)
      return firebase.auth().signOut()
    }

    if (firebase.auth().currentUser) {
      await firebase.auth().currentUser.reload()
    }

    if (type === AUTH_CHECK) {
      await firebaseLoaded()

      return localStorage.getItem("token") ? Promise.resolve() : Promise.reject()
    }

    if (type === AUTH_GET_PERMISSIONS) {
      await firebaseLoaded()

      if (!firebase.auth().currentUser) {
        return Promise.reject()
      }
      const roleId = localStorage.getItem(config.localStorageRoleId)
      const per = await permissions(roleId)
      try {
        delete per.id
        delete per.name
      } catch (error) {}
      localStorage.setItem("permissions", JSON.stringify(per))
      return Promise.resolve(per)
    }

    if (type === AUTH_LOGIN) {
      const { username, password, alreadySignedIn } = params
      let auth = firebase.auth().currentUser

      if (!auth || !alreadySignedIn) {
        auth = await firebase.auth().signInWithEmailAndPassword(username, password)
      }

      return config.handleAuthStateChange(auth, config)
    }
    if (type === AUTH_ERROR) {
      const status = params.status
      if (status === 401 || status === 403) {
        localStorage.removeItem(config.localStorageTokenName)
        localStorage.removeItem(config.localStorageRoleId)
        localStorage.removeItem(config.permissions)
        return Promise.reject()
      }
      return Promise.resolve()
    }

    return false
  }
}
