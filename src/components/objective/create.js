import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create  } from 'react-admin'

const ObjectiveCreate = props => {
  return (
    <Create title='Objetivos' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />
        <SelectInput source='line' label='Linea' />
      </SimpleForm>
    </Create>
  )
}
export default ObjectiveCreate
