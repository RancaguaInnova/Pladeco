import React from 'react'
import { Show, TextField, SimpleShowLayout } from 'react-admin'

const DepartmentShow = props => (
  <Show {...props} title="Departamento">
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
    </SimpleShowLayout>
  </Show>
)
export default DepartmentShow
