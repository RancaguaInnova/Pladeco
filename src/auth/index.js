/* globals localStorage */
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS
} from "react-admin";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const baseConfig = {
  collection: "users",
  userAdminProp: "isAdmin",
  localStorageTokenName: "RAFirebaseClientToken",
  handleAuthStateChange: async (auth, config) => {
    if (auth) {
      const querySnapshot = await firebase
        .firestore()
        .collection(config.collection)
        .where("uid", "==", auth.user.uid)
        .limit(1)
        .get();

      let profile;
      querySnapshot.forEach(function(doc) {
        profile = doc.data();
      });
      if (profile && profile[config.userAdminProp]) {
        const firebaseToken = await auth.user.getIdToken();
        let user = { auth, profile, firebaseToken };
        localStorage.setItem(config.localStorageTokenName, firebaseToken);
        return user;
      } else {
        firebase.auth().signOut();
        localStorage.removeItem(config.localStorageTokenName);
        throw new Error("sign_in_error");
      }
    } else {
      localStorage.removeItem(config.localStorageTokenName);
      throw new Error("sign_in_error");
    }
  }
};

export default (config = {}) => {
  config = { ...baseConfig, ...config };

  const firebaseLoaded = () =>
    new Promise(resolve => {
      firebase.auth().onAuthStateChanged(resolve);
    });

  return async (type, params) => {
    if (type === AUTH_LOGOUT) {
      config.handleAuthStateChange(null, config).catch(() => {});
      return firebase.auth().signOut();
    }

    if (firebase.auth().currentUser) {
      await firebase.auth().currentUser.reload();
    }

    if (type === AUTH_CHECK) {
      await firebaseLoaded();

      if (!firebase.auth().currentUser) {
        throw new Error("sign_in_error");
      }

      return true;
    }

    if (type === AUTH_GET_PERMISSIONS) {
      console.log("AUTH_GET_PERMISSIONS");
      await firebaseLoaded();

      if (!firebase.auth().currentUser) {
        throw new Error("sign_in_error");
      }

      const token = await firebase.auth().currentUser.getIdTokenResult();
      return token.claims;
    }

    if (type === AUTH_LOGIN) {
      const { username, password, alreadySignedIn } = params;
      let auth = firebase.auth().currentUser;

      if (!auth || !alreadySignedIn) {
        auth = await firebase
          .auth()
          .signInWithEmailAndPassword(username, password);
      }
      console.log("auth", auth);
      console.log("config", config);

      return config.handleAuthStateChange(auth, config);
    }

    return false;
  };
};
