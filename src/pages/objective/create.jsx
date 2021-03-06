import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create, ReferenceInput } from 'react-admin'

const ObjectiveCreate = props => {
  return (
    <Create title='Objetivos' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='lines' source='lineId' label='Linea' perPage={500}>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput reference='users' source='responsibleId' label='Responsable' perPage={500}>
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
export default ObjectiveCreate
