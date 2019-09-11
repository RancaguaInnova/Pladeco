import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ArrayField,
  SingleFieldList,
  ChipField,
  BooleanField
} from 'react-admin'
export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='profile.firstName' label='Nombre' />
      <TextField source='profile.lastName' label='Apellido' />
      <TextField source='profile.gender' label='Sexo' />
      <DateField
        source='profile.birthdate'
        label='Fecha de nacimiento'
        timeZone='America/Santiago'
      />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default UserList
