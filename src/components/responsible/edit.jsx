import React from 'react'
import { TextInput, SimpleForm, Edit, DateInput  } from 'react-admin'

const ResponsibleEdit = props => {
  return (
    <Edit title='Editar Responsable' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <DateInput  source='initialDate' label='Fecha Inicio'  />
        <DateInput  source='endDate' label='Fecha de termino'/>
      </SimpleForm>
    </Edit>
  )
}
export default ResponsibleEdit
