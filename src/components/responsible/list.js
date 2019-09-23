import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton,DateField } from 'react-admin'
export const ResponsibleList = props => (
  <List {...props} title='Responsables'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
      <DateField source='initialDate' label='Fecha de Inicio' />
      <DateField source='endDate' label='Fecha de Termino' />

      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default ResponsibleList
