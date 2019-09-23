import React from 'react'
import { Show, TextField, SimpleShowLayout } from 'react-admin'

const AreaShow = props => (
  <Show {...props} title="Área">
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='pladeco' label='Pladeco' />
    </SimpleShowLayout>
  </Show>
)
export default AreaShow
