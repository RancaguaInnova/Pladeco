import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField } from 'react-admin'
export const ActivityList = props => (
  <List {...props} title="Actividades">
    <Datagrid rowClick='edit'>
      <TextField source='description' label='Descripción' defaultValue='' />
      <TextField source='status' label='Estatus' defaultValue='' />
      <DateField source='createAt' label='Fecha de creación' defaultValue='' />
      <TextField source='completeBy' label='Completado por' defaultValue='' />
      <TextField source='files' label='Archivos' defaultValue='' />
      <TextField source='responsible' label='Responsable' defaultValue='' />
      <TextField source='executeFunds' label='Ejecutado por' defaultValue='' />
      <TextField source='coordinatedWith' label='Coordinado por' defaultValue='' />
      <TextField source='beneficiaries' label='Beneficiarios' defaultValue='' />
      <TextField source='location' label='Localización' defaultValue='' />
      <TextField source='comments' label='Comentarios' defaultValue='' />
      <TextField source='transversality' label='' defaultValue='' />
      <TextField source='validation' label='validación' defaultValue='' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default ActivityList
