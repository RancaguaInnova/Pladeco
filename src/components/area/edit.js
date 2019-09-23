import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit  } from 'react-admin'

const AreaEdit = props => {
  return (
    <Edit title='Editar Área' {...props}>
      <SimpleForm >
      <TextInput source='name' label='Nombre' defaultValue='' />
        <SelectInput source='pladeco' label='Pladeco' />
      </SimpleForm>
    </Edit>
  )
}
export default AreaEdit
