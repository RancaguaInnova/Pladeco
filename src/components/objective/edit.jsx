import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput, DateInput } from 'react-admin'

const ObjectiveEdit = props => {
  return (
    <Edit title='Editar Plan de trabajo' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='lines' source='lineId' label='Linea'>
          <SelectInput optionText='name' />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
export default ObjectiveEdit
