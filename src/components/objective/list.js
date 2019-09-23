import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton,DateField } from 'react-admin'
export const WorkPlanList = props => (
  <List {...props} title='Planes de trabajo'>
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

export default WorkPlanList
