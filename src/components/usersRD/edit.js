import React from 'react'
import { TextInput, SimpleForm, Edit, SelectInput } from 'react-admin'
import { DateInput } from 'react-admin-date-inputs'

const UserEdit = props => (
  <Edit {...props} title='Editando usuario'>
    <SimpleForm>
      <TextInput source='profile.firstName' label='Nombre' />
      <TextInput source='profile.lastName' label='Apellido' />
      <SelectInput
        source='profile.gender'
        choices={[{ id: 'hombre', name: 'hombre' }, { id: 'mujer', name: 'mujer' }]}
        label='Sexo'
      />
      <DateInput source='profile.birthdate' label='Fecha de Nacimiento' />
    </SimpleForm>
  </Edit>
)
export default UserEdit
