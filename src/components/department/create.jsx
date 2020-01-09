import React from 'react'
import { TextInput, SimpleForm, Create, ReferenceInput, SelectInput } from 'react-admin'

const DepartmentCreate = props => {
  return (
    <Create title='Crear Departamento' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='users' source='managerId' label='Responsable'>
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
export default DepartmentCreate
