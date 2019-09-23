import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput,DateInput  } from 'react-admin'

const ObjectiveEdit = props => {
  return (
    <Edit title='Editar Plan de trabajo' {...props}>
      <SimpleForm >
      <TextInput source='name' label='Nombre' defaultValue='' />
        <SelectInput source='line' label='Linea' />
      </SimpleForm>
    </Edit>
  )
}
export default ObjectiveEdit
