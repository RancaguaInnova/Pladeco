import React from 'react'
import {
  TextInput,
  SimpleForm,
  SelectInput,
  Create,
  ReferenceInput,
  SelectArrayInput,
  ChipField
} from 'react-admin'

const AreaCreate = props => {
  return (
    <Create title='Crear Área' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='workplans' source='workplanId' label='Pladeco'  linkType="show">
          <SelectInput optionText='name' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
export default AreaCreate
