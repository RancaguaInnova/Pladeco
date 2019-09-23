import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'
export const ObjectiveList = props => (
  <List {...props} title='Objetivos'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='line' label='Linea' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default ObjectiveList
