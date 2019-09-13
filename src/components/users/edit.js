import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput } from 'react-admin'

const validateUserCreation = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = ['Debe agregar el nombre del usuario']
  }
  if (!values.lastName) {
    errors.lastName = ['Debe agregar el Apellido del usuario']
  }
  if (!values.identifier) {
    errors.identifier = ['Debe agregar el rut del usuario']
  }
  if (!values.email) {
    errors.email = ['Debe agregar el email del usuario']
  }

  if (!values.username) {
    errors.username = ['La nombre de usuario es requerido']
  }

  if (!values.password) {
    errors.password = ['La contraseña es requerida']
  }

  if (!values.departmentId) {
    errors.departmentId = ['Debe agregar asociar un departamento al usuario']
  }
  if (!values.rol) {
    errors.rol = ['Debe asociar un rol de permisos']
  }

  return errors
}
const UserEdit = props => (
  <Edit {...props} title='Editando usuario'>
    <SimpleForm validate={validateUserCreation}>
      <TextInput source='firstName' label='Nombre' defaultValue='' />
      <TextInput source='lastName' label='Apellido' defaultValue='' />
      <TextInput source='identifier' label='Número de Documento' defaultValue='' />
      <TextInput source='email' type='email' label='Email' />
      <TextInput source='username' label='Usuario' />
      <TextInput source='password' label='Contraseña' />
      <TextInput source='departmentId' label='Departamento Municipal' defaultValue='' />
      <ReferenceInput label='Departamento Municipal' source='departmentId' reference='Departments'>
        <SelectInput optionText='descriptions' />
      </ReferenceInput>
      <ReferenceInput label='Rol' source='rolId' reference='roles'>
        <SelectInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)
export default UserEdit
