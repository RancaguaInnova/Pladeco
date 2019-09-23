import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField } from 'react-admin'
export const LineList = props => (
  <List {...props} title='Lineas'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='area' label='Área' />
      <TextField source='responsible' label='Responsable' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default LineList
