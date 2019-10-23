import React from 'react'
import { Show, TextField, SimpleShowLayout } from 'react-admin'

const RolesShow = props => (
  <Show {...props} title='Área'>
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' defaultValue='' />
 
    </SimpleShowLayout>
  </Show>
)
export default RolesShow
