import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create, ReferenceInput,BooleanInput } from 'react-admin'

const validateUserCreation = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = ["Debe agregar el nombre del usuario"];
  }
  if (!values.lastName) {
    errors.lastName = ["Debe agregar el Apellido del usuario"];
  }
  if (!values.identifier) {
    errors.identifier = ["Debe agregar el rut del usuario"];
  }

  if (!values.departmentId) {
    errors.departmentId = ["Debe agregar asociar un departamento al usuario"];
  }
  if (!values.role) {
    errors.rol = ["Debe asociar un rol de permisos"];
  }

  return errors;
};
const UserCreate = props => {
  return (
    <Create title='Crear Usuario' {...props} validate={validateUserCreation}>
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
      <BooleanInput source='isAdmin' label='Tiene Permisos para ingresar al pladeco' defaultValue={false} />

       
      </SimpleForm>
    </Create>
  )
}
export default UserCreate
