import React from 'react'
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import { useSelectedValues } from '../../provider/context'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'
import { usePermissions } from 'react-admin'
import _get from 'lodash/get'

const listStyles = {
  thead: {
    background: 'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color: '#fff'
  },
  table: {
    color: '#fff'
  }
}

export const ObjectiveList = withStyles(listStyles)(({ classes, ...props }) => {
  let [{ lineId }] = useSelectedValues()
  const { permissions } = usePermissions()

  return (
    <List {...props} title='Objetivos' filter={{ lineId }}>
      <Datagrid classes={classes}>
        <TextField source='name' label='Nombre' defaultValue='' />
        <ReferenceField label='Linea' source='lineId' reference='lines' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <EditButton label='Editar' />
        {_get(permissions, 'objectives.delete', false) && (
          <DeleteButtonWithConfirmation label='Eliminar' />
        )}
      </Datagrid>
    </List>
  )
})

export default ObjectiveList
