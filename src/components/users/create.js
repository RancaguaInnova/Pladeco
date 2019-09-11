import React from 'react'
import { TextInput, DateInput, SimpleForm, SelectInput, DisabledInput, Create } from 'react-admin'
import InputSearchPlace from '../../helpers/fields/inputSearchPlace'
import _setWith from 'lodash/setWith'
import  EmailValidator  from 'email-validator'
const validateUserCreation = (values) => {
  const errors = {};
  if (!values.profile || !values.profile.firstName ) {
    _setWith(errors,'profile.firstName','Debe agregar el nombre del usuario',errors)
  }
  if (!values.profile || !values.profile.lastName) {
    _setWith(errors,'profile.lastName','Debe agregar el apellido del usuario',errors)
  } 
  if (!values.email) {
    errors.email = ['Debe agregar un email'];
  }  
  if (values.email!=="" && EmailValidator.validate(values.email)===false) {
    errors.email = ['Debe agregar un email válido'];
  } 
  if (!values.password) {
    errors.password = ['La contraseña es requerida'];
  } 
  if (!values.profile || !values.profile.identifier) {
    _setWith(errors,'profile.identifier','Debe agregar el número de documento del usuario (R.U.T)',errors)
  }   
  return errors
};
const UserEdit = props => {
  console.log(props)
  return(
  <Create title='Crear Usuario' {...props}>
    <SimpleForm validate={validateUserCreation}>
      <TextInput source='profile.firstName' label='Nombre'  defaultValue='' />
      <TextInput source='profile.lastName' label='Apellido'  defaultValue='' />
      <TextInput source='email' label='Email' type="email"  defaultValue='' />
      <TextInput source='password' label='Contraseña'  defaultValue='' />
      <TextInput source='profile.identifier' label='Número de Documento'   defaultValue=''/>
      <SelectInput
        source='profile.gender'
        choices={[{ id: 'hombre', name: 'hombre' }, { id: 'mujer', name: 'mujer' }]}
        label='Sexo'
      />
      <DateInput source='profile.birthdate' label='Fecha de Nacimiento'/>
      <InputSearchPlace source='profile.address'></InputSearchPlace>
    </SimpleForm>
  </Create>
)}
export default UserEdit
