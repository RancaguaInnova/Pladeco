import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput,DateInput  } from 'react-admin'

const ActionEdit = props => {
  return (
    <Edit title='Editar acción' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' />
      <TextInput source='responsible' label='Responsable' />
      <TextInput source='dependensOn' label='depende de:' />
      <TextInput source='state' label='Fecha de Termino' />
      <TextInput source='initialDate' label='Fecha de inicio' />
      <TextInput source='endDate' label='Fecha de termino' />
      <TextInput source='weight' label='Peso' />
      <TextInput source='activities' label='Actividades' />
      </SimpleForm>
    </Edit>
  )
}
export default ActionEdit
