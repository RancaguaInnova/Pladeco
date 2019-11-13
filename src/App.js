import React, { Component } from 'react'
import { Admin } from 'react-admin'
import Provider from './provider'
import Theme from './theme'
import './App.scss'
import I18nProvider from './i18n'
import AddUploadCapabilities from './helpers/UploadImage'
import AuthProvider from './auth'
import LoginPage from './components/login'
import Profile from './components/profile'
import Users from './components/users'
import { ResourceWithPermissions } from 'ra-auth-acl'
import Action from './components/action'
import Activity from './components/activity'
import Area from './components/area'
import Deparment from './components/department'
import Objective from './components/objective'
import Responsible from './components/responsible'
import Line from './components/line'
import WorkPlan from './components/workPlan'
import Dashboard from './components/dashboard'
import Roles from './components/roles'
import { Layout } from './components/layout'
import CustomRouters from './components/customRouters'

class App extends Component {
  render() {
    return (
      <Admin
        customRoutes={CustomRouters}
        loginPage={LoginPage}
        dashboard={Dashboard}
        authProvider={AuthProvider}
        theme={Theme}
        dataProvider={AddUploadCapabilities(Provider)}
        locale='es'
        appLayout={Layout}
        i18nProvider={I18nProvider}
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
            <ResourceWithPermissions name='profile' {...Profile} permissions={permissions} />,
            <ResourceWithPermissions
              name='responsible'
              {...Responsible}
              permissions={permissions}
            />
          ]
        }}
      </Admin>
    )
  }
}

export default App
