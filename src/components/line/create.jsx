import React from 'react'
import { TextInput, SimpleForm, SelectInput, Create, ReferenceInput } from 'react-admin'

const LineCreate = props => {
  return (
    <Create title='Crear Linea' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='areas' source='areaId' label='Area'  linkType="show">
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput reference='users' source='responsibleId' label='Responsable'  linkType="show">
          <SelectInput optionText='identifier' />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
export default LineCreate
