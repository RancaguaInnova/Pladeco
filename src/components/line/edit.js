import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit } from 'react-admin'

const LineEdit = props => {
  return (
    <Edit title='Editar Linea' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />
        <SelectInput source='area' label='Área' />
        <SelectInput source='responsible' label='Responsable' />
      </SimpleForm>
    </Edit>
  )
}
export default LineEdit
