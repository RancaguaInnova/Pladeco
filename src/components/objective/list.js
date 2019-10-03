import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField } from 'react-admin'
export const ObjectiveList = props => (
  <List {...props} title='Objetivos'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='Descripción' defaultValue='' />
      <ReferenceField label='Linea' source='lineId' reference='lines'>
        <TextField source='name' />
      </ReferenceField>
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default ObjectiveList
