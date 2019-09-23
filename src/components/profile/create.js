import React from 'react'
import { TextInput, SimpleForm, Create,DateInput  } from 'react-admin'

const ProfileCreate = props => {
  return (
    <Create title='Crear Plan de trabajo' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <DateInput  source='initialDate' label='Fecha Inicio' />
        <DateInput  source='endDate' label='Fecha de termino'/>
      </SimpleForm>
    </Create>
  )
}
export default ProfileCreate
