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
        {permissions => [
          <ResourceWithPermissions name='users' {...Users} permissions={permissions} />,
          <ResourceWithPermissions name='profile' {...Profile} permissions={permissions} />
        ]}
      </Admin>
    )
  }
}

export default App
