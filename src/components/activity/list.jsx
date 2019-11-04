import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
  SelectField,
  BooleanField
} from 'react-admin'
import DateField from '../../helpers/fields/DateField'
import { withStyles } from '@material-ui/core/styles'
const listStyles = {
  actions: {
    backgroundColor: 'red'
  },
  thead: {
    background: 'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color: '#fff'
  },
  table: {
    color: '#fff'
  }
}
export const ActivityList = withStyles(listStyles)(({ classes, ...props }) => (
  <List {...props} title='Actividades'>
    <Datagrid rowClick='edit' classes={classes}>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='Descripción' defaultValue='' />
      <ReferenceField reference='actions' source='actionId' label='Acción' linkType='show'>
        <TextField source='name' />
      </ReferenceField>
      <SelectField
        source='status'
        label='Estado'
        choices={[
          { id: 'not-started', name: 'No iniciado' },
          { id: 'in-progress', name: 'En progreso' },
          { id: 'finished', name: 'Finalizado' }
        ]}
      />
      <DateField source='createAt' label='Fecha de creación' defaultValue='' />

      <BooleanField source='approved' label='Aprobado' defaultValue='' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
))

export default ActivityList
