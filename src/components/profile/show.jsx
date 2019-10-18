import React from 'react'
import { Show, TextField, SimpleShowLayout, DateField } from 'react-admin'

const ProfileShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
      <DateField source='initialDate' label='Fecha de Inicio' />
      <DateField source='endDate' label='Fecha de Termino' />
    </SimpleShowLayout>
  </Show>
)
export default ProfileShow
