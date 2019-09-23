import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput,DateInput  } from 'react-admin'

const ProfileEdit = props => {
  return (
    <Edit title='Editar Plan de trabajo' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <DateInput  source='initialDate' label='Fecha Inicio'  />
        <DateInput  source='endDate' label='Fecha de termino'/>
      </SimpleForm>
    </Edit>
  )
}
export default ProfileEdit
