import React from 'react'
import {
  TextInput,
  SimpleForm,
  Edit,
  SelectInput,
  DisabledInput,
  ArrayInput,
  SimpleFormIterator,
  BooleanInput
} from 'react-admin'
import { DateInput, TimeInput, DateTimeInput } from 'react-admin-date-inputs'
import DateFnsUtils from '@date-io/date-fns'
import esLocale from 'date-fns/locale/es'

const UserEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='profile.firstName' label='Nombre' />
      <TextInput source='profile.lastName' label='Apellido' />
      <SelectInput
        source='profile.gender'
        choices={[{ id: 'hombre', name: 'hombre' }, { id: 'mujer', name: 'mujer' }]}
        label='Sexo'
      />
      <DateInput
        source='profile.birthdate'
        label='Fecha de Nacimiento'
        options={{ format: 'dd/MM/YYYY' }}
      />
    </SimpleForm>
  </Edit>
)
export default UserEdit
