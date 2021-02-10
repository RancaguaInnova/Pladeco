import React from 'react'
import { List, Datagrid, TextField, EditButton, ReferenceField, usePermissions } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import { useSelectedValues } from '../../provider/context'
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

export const AreaList = withStyles(listStyles)(({ classes, ...props }) => {
  let [{ workplanId }] = useSelectedValues()
  const { permissions } = usePermissions()

  return (
    <List {...props} title='Áreas' filter={{ workplanId }}>
      <Datagrid classes={classes}>
        <TextField source='name' label='Nombre' defaultValue='' />
        <ReferenceField label='Pladeco' source='workplanId' reference='workplans' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <EditButton label='Editar' />
        {_get(permissions, 'areas.delete', false) && (
          <DeleteButtonWithConfirmation label='Eliminar' />
        )}
      </Datagrid>
    </List>
  )
})

export default AreaList
