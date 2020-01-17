import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create ,ReferenceInput} from 'react-admin'

const ObjectiveCreate = props => {
  return (
    <Create title='Objetivos' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='lines' source='lineId' label='Linea'  >
          <SelectInput optionText='name' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
export default ObjectiveCreate
