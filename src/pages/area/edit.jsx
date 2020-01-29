import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput } from 'react-admin'

const AreaEdit = props => {
  return (
    <Edit title='Editar Área' {...props}>
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
    </Edit>
  )
}
export default AreaEdit
