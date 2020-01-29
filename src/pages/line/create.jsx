import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create, ReferenceInput } from 'react-admin'

const LineCreate = props => {
  return (
    <Create title='Crear Linea' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='areas' source='areaId' label='Area' perPage={500}>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput reference='users' source='responsibleId' label='Responsable' perPage={500}>
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
export default LineCreate
