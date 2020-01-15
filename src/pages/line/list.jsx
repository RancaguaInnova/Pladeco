import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'

const listStyles = {
  thead: {
    background: 'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color: '#fff !important'
  }
}

export const LineList = withStyles(listStyles)(({ classes, ...props }) => (
  <List {...props} title='Lineas'>
    <Datagrid rowClick='edit' classes={classes}>
      <TextField source='name' label='Nombre' defaultValue='' />
      <ReferenceField reference='areas' source='areaId' label='Area' link='show'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField reference='users' source='responsibleId' label='Responsable' link='show'>
        <TextField source='identifier' />
      </ReferenceField>
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
))

export default LineList