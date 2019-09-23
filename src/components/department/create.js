import React from 'react'
import { TextInput, SimpleForm, Create  } from 'react-admin'

const DepartmentCreate = props => {
  return (
    <Create title='Crear Departamento' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
      </SimpleForm>
    </Create>
  )
}
export default DepartmentCreate
