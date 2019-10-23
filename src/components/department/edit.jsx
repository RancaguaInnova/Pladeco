import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput,DateInput  } from 'react-admin'

const DepartmentEdit = props => {
  return (
    <Edit title='Editar Departamento' {...props}>
      <SimpleForm >
      <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='users' source='managerId' label='Responsable' >
          <SelectInput optionText='identifier' />
        </ReferenceInput> 
      </SimpleForm>
    </Edit>
  )
}
export default DepartmentEdit
