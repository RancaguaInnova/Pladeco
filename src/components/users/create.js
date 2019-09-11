import React from 'react'
import { TextInput, DateInput, SimpleForm, SelectInput, DisabledInput, Create } from 'react-admin'
import InputSearchPlace from '../../helpers/fields/inputSearchPlace'
const UserEdit = props => (
  <Create title='Crear Usuario' {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='profile.firstName' label='Nombre' />
      <TextInput source='profile.lastName' label='Apellido' />
      <TextInput source='email' label='Email' />
      <TextInput source='password' label='Contraseña' />
      <TextInput source='profile.identifier' label='Número de Documento' />
      <SelectInput
        source='profile.gender'
        choices={[{ id: 'hombre', name: 'hombre' }, { id: 'mujer', name: 'mujer' }]}
        label='Sexo'
      />
      <DateInput source='profile.birthdate' label='Fecha de Nacimiento' />
      <InputSearchPlace source='profile.address'></InputSearchPlace>
    </SimpleForm>
  </Create>
)
export default UserEdit
