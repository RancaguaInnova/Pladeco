import React from 'react'
import { Show, TextField, SimpleShowLayout } from 'react-admin'

const ObjetiveShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
    <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='line' label='Linea' />
    </SimpleShowLayout>
  </Show>
)
export default ObjetiveShow
