import React from 'react'
import { Admin } from 'react-admin'
import spanishMessages from '@blackbox-vision/ra-language-spanish'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import { ResourceWithPermissions } from 'ra-auth-acl'
import { FirebaseDataProvider } from 'react-admin-firebase'

// PAGES
import Users from './pages/users'
import Action from './pages/action'
import Activity from './pages/activity'
import Deparment from './pages/department'
import Objective from './pages/objective'
import Line from './pages/line'
import WorkPlan from './pages/workPlan'
import Roles from './pages/roles'
import Area from './pages/area'
import { Layout } from './pages/layout'
import CustomRouters from './pages/customRoutes'
import Profile from './pages/profile'
import Inicio from './pages/Inicio'

// PROVIDERS
import AuthProvider from './auth'
import { initialContext, SelectionsProvider, reducer } from './provider/context'

const firebase = require('firebase')
require('firebase/firestore')

const i18nProvider = polyglotI18nProvider(() => spanishMessages, 'es')
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
}
firebase.initializeApp(firebaseConfig)

const options = {
  logging: false
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options)
const authProvider = AuthProvider()

const App = () => {
  return (
    <SelectionsProvider initialSelections={initialContext} reducer={reducer}>
      <Admin
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        layout={Layout}
        customRoutes={CustomRouters}
        authProvider={authProvider}
        loginPage={Inicio}
      >
        {permissions => {
          return [
            <ResourceWithPermissions name='workplans' {...WorkPlan} permissions={permissions} />,
            <ResourceWithPermissions name='areas' {...Area} permissions={permissions} />,
            <ResourceWithPermissions name='lines' {...Line} permissions={permissions} />,
            <ResourceWithPermissions name='objectives' {...Objective} permissions={permissions} />,
            <ResourceWithPermissions name='actions' {...Action} permissions={permissions} />,
            <ResourceWithPermissions name='activities' {...Activity} permissions={permissions} />,
            <ResourceWithPermissions name='departments' {...Deparment} permissions={permissions} />,
            <ResourceWithPermissions name='roles' {...Roles} permissions={permissions} />,
            <ResourceWithPermissions name='users' {...Users} permissions={permissions} />,
            <ResourceWithPermissions name='profile' {...Profile} permissions={permissions} />
          ]
        }}
      </Admin>
    </SelectionsProvider>
  )
}
export default App
