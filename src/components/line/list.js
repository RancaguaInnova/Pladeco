import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  DateField,
  ReferenceField
} from 'react-admin'
export const LineList = props => (
  <List {...props} title='Lineas'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='Descripción' defaultValue='' />
      <ReferenceField reference='areas' source='areaId' label='Area'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField reference='users' source='responsibleId' label='Responsable'>
        <TextField source='identifier' />
      </ReferenceField>
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default LineList
