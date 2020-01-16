import React from "react"
import { Admin, Resource } from "react-admin"
import Users from "./pages/users"
import Action from "./pages/action"
import Activity from "./pages/activity"
import Area from "./pages/area"
import Deparment from "./pages/department"
import Objective from "./pages/objective"
import Line from "./pages/line"
import WorkPlan from "./pages/workPlan"
import Dashboard from "./pages/dashboard"
import Roles from "./pages/roles"
import { Layout } from "./pages/layout"
import CustomRouters from "./pages/customRoutes"
import spanishMessages from "@blackbox-vision/ra-language-spanish"
import polyglotI18nProvider from "ra-i18n-polyglot"
import AddUploadCapabilities from "./helpers/UploadImage"
import { ResourceWithPermissions } from "ra-auth-acl"
import Profile from "./pages/profile"
import AuthProvider from "./auth"
import { FirebaseAuthProvider, FirebaseDataProvider } from "react-admin-firebase"

const i18nProvider = polyglotI18nProvider(() => spanishMessages, "es")

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
}

// All options are optional
const options = {
  // Enable logging of react-admin-firebase
  logging: true
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProvider = FirebaseAuthProvider(firebaseConfig, options)

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    layout={Layout}
    customRoutes={CustomRouters}
    authProvider={authProvider}
  >
    {/*   {permissions => {
      return [
        <ResourceWithPermissions
          name="workplans"
          {...WorkPlan}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="areas"
          {...Area}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="lines"
          {...Line}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="objectives"
          {...Objective}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="actions"
          {...Action}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="activities"
          {...Activity}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="departments"
          {...Deparment}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="roles"
          {...Roles}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="users"
          {...Users}
          permissions={permissions}
        />,
        <ResourceWithPermissions
          name="profile"
          {...Profile}
          permissions={permissions}
        />
      ];
    }} */}
    <Resource name="workplans" {...WorkPlan} />

    <Resource name="areas" {...Area} />
    <Resource name="lines" {...Line} />
    <Resource name="objectives" {...Objective} />
    <Resource name="actions" {...Action} />
    <Resource name="activities" {...Activity} />
    <Resource name="users" {...Users} />
    <Resource name="departments" {...Deparment} />
    <Resource name="roles" {...Roles} />
  </Admin>
)
export default App
