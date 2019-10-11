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
import { withStyles } from '@material-ui/core/styles';

const listStyles = {
  actions: {
      backgroundColor: 'red',
  },
  thead: {
    background:'linear-gradient(60deg, #26c6da, #BCD6DD)',
      color:'#fff !important'
  },
};


export const LineList = withStyles(listStyles)(({ classes, ...props })  => (
  <List {...props} title='Lineas'>
    <Datagrid rowClick='edit'  classes={classes}>
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
))

export default LineList