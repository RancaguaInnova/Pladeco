import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create, ReferenceInput } from 'react-admin'




const UserCreate = props => {
  return (
    <Create title='Crear Usuario' {...props}>
      <SimpleForm >
      <TextInput source='firstName' label='Nombre' defaultValue='' />
      <TextInput source='lastName' label='Apellido' defaultValue='' />
      <TextInput source='identifier' label='Número de Documento' defaultValue='' />
      <TextInput source='email.address' type='email' label='Email' />
      <ReferenceInput label='Departamento Municipal' source='departmentId' reference='departments'>
        <SelectInput optionText='name' />
      </ReferenceInput>
      <ReferenceInput label='Rol' source='role.id' reference='roles'>
        <SelectInput optionText='name' />
      </ReferenceInput>
       
      </SimpleForm>
    </Create>
  )
}
export default UserCreate
