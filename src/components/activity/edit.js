import React from 'react'
import { TextInput, SimpleForm, Edit, DateInput } from 'react-admin'

const ActivityEdit = props => {
  return (
    <Edit title='Editar Actividad' {...props}>
      <SimpleForm >
        <TextInput source='description' label='Descripción' defaultValue='' />
        <TextInput source='status' label='Estatus' defaultValue='' />
        <DateInput source='createAt' label='Fecha de creación' defaultValue='' />
        <TextInput source='completeBy' label='Completado por' defaultValue='' />
        <TextInput source='files' label='Archivos' defaultValue='' />
        <TextInput source='responsible' label='Responsable' defaultValue='' />
        <TextInput source='executeFunds' label='Ejecutado por' defaultValue='' />
        <TextInput source='coordinatedWith' label='Coordinado por' defaultValue='' />
        <TextInput source='beneficiaries' label='Beneficiarios' defaultValue='' />
        <TextInput source='location' label='Localización' defaultValue='' />
        <TextInput source='comments' label='Comentarios' defaultValue='' />
        <TextInput source='transversality' label='' defaultValue='' />
        <TextInput source='validation' label='validación' defaultValue='' />
      </SimpleForm>
    </Edit>
  )
}
export default ActivityEdit
