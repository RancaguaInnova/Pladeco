import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton,DateField } from 'react-admin'
import { withStyles } from '@material-ui/core/styles';
const listStyles = {
  actions: {
      backgroundColor: 'red',
  },
  thead: {
    background:'#BCD6DD',
    color:'#fff'
  },
  table:{
    color:'#fff',
  }
    
};

 const WorkPlanList =  withStyles(listStyles)(({ classes, ...props }) => (
  <List {...props} title='Planes de trabajo'         classes={classes} >
    <Datagrid rowClick='edit' classes={classes}>
      <TextField source='name' label='Nombre' />
      <TextField source='description' label='Descripción' />
      <DateField source='initialDate' label='Fecha de Inicio' />
      <DateField source='endDate' label='Fecha de Termino' />

      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
))

export default WorkPlanList
