import React from 'react'
import { TextInput, SimpleForm, SelectInput, Edit, ReferenceInput } from 'react-admin'

const LineEdit = props => {
  return (
    <Edit title='Editar Linea' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='areas' source='areaId' label='Area' link='show' perPage={500}>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <ReferenceInput
          reference='users'
          source='responsibleId'
          label='Responsable'
          link='show'
          perPage={500}
        >
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
export default LineEdit
