import React, { Component } from 'react'
import { Admin, Resource, ListGuesser, ShowGuesser, EditGuesser } from 'react-admin'
import Provider from './provider'
import Theme from './theme'
import './App.scss'
import I18nProvider from './i18n'
import AddUploadCapabilities from './addUploadCapabilities'
import AuthProvider from './auth'
import LoginPage from './components/login'
import { Route } from 'react-router-dom'
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

class App extends Component {
  render() {
    return (
      <Admin
        loginPage={LoginPage}
        customRoutes={[<Route key='Perfil' path='/profile' component={Profile.edit} />]}
        authProvider={AuthProvider}
        theme={Theme}
        dataProvider={AddUploadCapabilities(Provider)}
        locale='es'
        i18nProvider={I18nProvider}
      >
        {/*    <Resource name='news' {...News} />
            <Resource name='users' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
        */}
        {permissions => {
          console.log(permissions)
          return [
            <ResourceWithPermissions name='users' {...Users} permissions={permissions} />,
            <ResourceWithPermissions name='profile' {...Profile} permissions={permissions} />,
            <ResourceWithPermissions name='action' {...Action} permissions={permissions} />,
            <ResourceWithPermissions name='activity' {...Activity} permissions={permissions} />,
            <ResourceWithPermissions name='area' {...Area} permissions={permissions} />,
            <ResourceWithPermissions name='deparment' {...Deparment} permissions={permissions} />,
            <ResourceWithPermissions name='line' {...Line} permissions={permissions} />,
            <ResourceWithPermissions name='objective' {...Objective} permissions={permissions} />,
            <ResourceWithPermissions name='responsible' {...Responsible} permissions={permissions} />,
            <ResourceWithPermissions name='workplan' {...WorkPlan} permissions={permissions} />

          ]
        }}
      </Admin>
    )
  }
}

export default App
