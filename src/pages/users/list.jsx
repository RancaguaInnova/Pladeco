import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
  usePermissions,
  Filter,
  TextInput
} from 'react-admin'
import _get from 'lodash/get'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'

const UsersFilter = props => (
  <Filter {...props}>
    <TextInput label='Nombre' source='firstName' alwaysOn />
    <TextInput label='Apellido' source='lastName' alwaysOn />
    <TextInput label='Rut' source='identifier' alwaysOn />
  </Filter>
)

export const UserList = props => {
  const { permissions } = usePermissions()

  return (
    <List {...props} title='Listado de Usuarios' filters={<UsersFilter />}>
      <Datagrid>
        <TextField source='firstName' label='Nombre' />
        <TextField source='lastName' label='Apellido' />
        <TextField source='identifier' label='Rut' />
        <TextField source='email.address' label='Email' />
        <ReferenceField label='Rol' source='role' reference='roles'>
          <TextField source='name' />
        </ReferenceField>
        <EditButton label='Editar' />
        {_get(permissions, 'users.delete', false) && (
          <DeleteButtonWithConfirmation label='Eliminar' />
        )}{' '}
      </Datagrid>
    </List>
  )
}

export default UserList
