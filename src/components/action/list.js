import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin'
export const ActionList = props => (
  <List {...props} title='Acciones'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' />
      <TextField source='responsible' label='Responsable' />
      <TextField source='dependensOn' label='depende de:' />
      <TextField source='state' label='Fecha de Termino' />
      <TextField source='initialDate' label='Fecha de inicio' />
      <TextField source='endDate' label='Fecha de termino' />
      <TextField source='weight' label='Peso' />
      <TextField source='activities' label='Actividades' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default ActionList
