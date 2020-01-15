import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'
export const DepartmentList = props => (
  <List {...props} title='Departamentos'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default DepartmentList
