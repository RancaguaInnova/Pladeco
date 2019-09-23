import React from 'react'
import { Show, TextField, SimpleShowLayout, DateField } from 'react-admin'

const ActivityShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source='description' label='Descripción' defaultValue='' />
      <TextField source='status' label='Estatus' defaultValue='' />
      <DateField source='createAt' label='Fecha de creación' defaultValue='' />
      <TextField source='completeBy' label='Completado por' defaultValue='' />
      <TextField source='files' label='Archivos' defaultValue='' />
      <TextField source='responsible' label='Responsable' defaultValue='' />
      <TextField source='executeFunds' label='Ejecutado por' defaultValue='' />
      <TextField source='coordinatedWith' label='Coordinado por' defaultValue='' />
      <TextField source='beneficiaries' label='Beneficiarios' defaultValue='' />
      <TextField source='location' label='Localización' defaultValue='' />
      <TextField source='comments' label='Comentarios' defaultValue='' />
      <TextField source='transversality' label='' defaultValue='' />
      <TextField source='validation' label='validación' defaultValue='' />
    </SimpleShowLayout>
  </Show>
)
export default ActivityShow
