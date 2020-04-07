import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput } from 'react-admin'

const ObjectiveEdit = props => {
  return (
    <Edit title='Editar Plan de trabajo' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='lines' source='lineId' label='Linea' link='show' perPage={500}>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput reference='users' source='responsibleId' label='Responsable' perPage={500}>
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
export default ObjectiveEdit
