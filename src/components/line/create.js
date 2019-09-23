import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create  } from 'react-admin'

const LineCreate = props => {
  return (
    <Create title='Crear Linea' {...props}>
      <SimpleForm >
      <TextInput source='name' label='Nombre' defaultValue='' />
        <SelectInput source='area' label='Área' />
        <SelectInput source='responsible' label='Responsable' />

      </SimpleForm>
    </Create>
  )
}
export default LineCreate
