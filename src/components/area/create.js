import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create  } from 'react-admin'

const AreaCreate = props => {
  return (
    <Create title='Crear Área' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />
        <SelectInput source='pladeco' label='Pladeco' />
      </SimpleForm>
    </Create>
  )
}
export default AreaCreate
