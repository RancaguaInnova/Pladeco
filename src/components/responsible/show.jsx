import React from 'react'
import { Show, TextField, SimpleShowLayout, DateField } from 'react-admin'

const ResponsibleShow = props => (
  <Show {...props}>
    <SimpleShowLayout title='Responsable'>
      <TextField source='id' />
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
      <DateField source='initialDate' label='Fecha de Inicio' />
      <DateField source='endDate' label='Fecha de Termino' />
    </SimpleShowLayout>
  </Show>
)
export default ResponsibleShow
