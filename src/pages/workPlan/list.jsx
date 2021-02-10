import React from 'react'
import { List, Datagrid, TextField, EditButton, DateField, usePermissions } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import _get from 'lodash/get'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'
const listStyles = {
  thead: {
    background: 'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color: '#fff'
  },
  table: {
    color: '#fff'
  }
}

const WorkPlanList = withStyles(listStyles)(({ classes, ...props }) => {
  const { permissions } = usePermissions()

  return (
    <List {...props} title='Planes de trabajo'>
      <Datagrid classes={classes}>
        <TextField source='name' label='Nombre' />
        <TextField source='description' label='Descripción' />
        <DateField source='initialDate' label='Fecha de Inicio' />
        <DateField source='endDate' label='Fecha de Termino' />

        <EditButton label='Editar' />
        {_get(permissions, 'workplans.delete', false) && (
          <DeleteButtonWithConfirmation label='Eliminar' />
        )}
      </Datagrid>
    </List>
  )
})

export default WorkPlanList
