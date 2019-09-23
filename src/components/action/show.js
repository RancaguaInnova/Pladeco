import React from 'react'
import { Show, TextField, SimpleShowLayout } from 'react-admin'

const ActionShow = props => (
  <Show {...props} Title="Acción">
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' />
      <TextField source='responsible' label='Responsable' />
      <TextField source='dependensOn' label='depende de:' />
      <TextField source='state' label='Fecha de Termino' />
      <TextField source='initialDate' label='Fecha de inicio' />
      <TextField source='endDate' label='Fecha de termino' />
      <TextField source='weight' label='Peso' />
      <TextField source='objetive' label='Objetivo' />
    </SimpleShowLayout>
  </Show>
)
export default ActionShow
