import React, { Component } from 'react'
import { Admin, ListGuesser, ShowGuesser, EditGuesser } from 'react-admin'
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
import Dashboard from './components/dashboard';
import Roles from './components/roles'

class App extends Component {
  render() {
    return (
      <Admin
        loginPage={LoginPage}
        dashboard={Dashboard}
        authProvider={AuthProvider}
        theme={Theme}
        dataProvider={AddUploadCapabilities(Provider)}
        locale='es'
        i18nProvider={I18nProvider}
      >
        {permissions => {
          console.log("permissions",permissions)
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
            <ResourceWithPermissions name='responsible' {...Responsible} permissions={permissions} />
          ]
        }}
      </Admin>
    )
  }
}

export default App
