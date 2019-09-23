import React from 'react'
import { Show, TextField, SimpleShowLayout } from 'react-admin'

const LineShow = props => (
  <Show {...props} title="Linea">
    <SimpleShowLayout>
    <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='area' label='Área' />
      <TextField source='responsible' label='Responsable' />
    </SimpleShowLayout>
  </Show>
)
export default LineShow
