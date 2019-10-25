import React from 'react'
import { TextInput, SimpleForm, Create  } from 'react-admin'

const ResponsibleCreate = props => {
  return (
    <Create title='Crear responsable' {...props}>
      <SimpleForm >
        <TextInput source='name' label='Nombre' defaultValue='' />      
          <TextInput source='departmentId' label='Nombre' defaultValue='' />
      </SimpleForm>
    </Create>
  )
}
export default ResponsibleCreate
