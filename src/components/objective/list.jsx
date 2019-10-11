import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField } from 'react-admin'
import { withStyles } from '@material-ui/core/styles';
const listStyles = {
  actions: {
      backgroundColor: 'red',
  },
  thead: {
    background:'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color:'#fff'
  },
  table:{
    color:'#fff',
  }
    
};

export const ObjectiveList =  withStyles(listStyles)(({ classes, ...props })  => (
  <List {...props} title='Objetivos'>
    <Datagrid rowClick='edit' classes={classes}>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='Descripción' defaultValue='' />
      <ReferenceField label='Linea' source='lineId' reference='lines'>
        <TextField source='name' />
      </ReferenceField>
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
))

export default ObjectiveList