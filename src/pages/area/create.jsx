import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create, ReferenceInput } from 'react-admin'

const AreaCreate = props => {
  return (
    <Create title='Crear Área' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput
          reference='workplans'
          source='workplanId'
          label='Pladeco'
          link='show'
          perPage={500}
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
export default AreaCreate
