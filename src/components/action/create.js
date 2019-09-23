import React from 'react'
import { TextInput, SimpleForm, Create,SelectInput } from 'react-admin'

const ActionCreate = props => {
  return (
    <Create title='Crear Acción' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' />
        <TextInput source='responsible' label='Responsable' />
        <TextInput source='dependensOn' label='Depende de:' />
        <TextInput source='state' label='Fecha de Termino' />
        <TextInput source='initialDate' label='Fecha de inicio' />
        <TextInput source='endDate' label='Fecha de termino' />
        <TextInput source='weight' label='Peso' />
        <SelectInput source='objetive' label='Objetivo' />
      </SimpleForm>
    </Create>
  )
}
export default ActionCreate
