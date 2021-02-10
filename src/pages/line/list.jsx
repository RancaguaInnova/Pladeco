import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
  FunctionField,
  usePermissions
} from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import { useSelectedValues } from '../../provider/context'
import _get from 'lodash/get'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'

const listStyles = {
  thead: {
    background: 'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color: '#fff !important'
  }
}

export const LineList = withStyles(listStyles)(({ classes, ...props }) => {
  let [{ areaId }] = useSelectedValues()
  const { permissions } = usePermissions()

  return (
    <List {...props} title='Lineas' filter={{ areaId }}>
      <Datagrid classes={classes}>
        <TextField source='name' label='Nombre' defaultValue='' />
        <ReferenceField reference='areas' source='areaId' label='Area' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <ReferenceField reference='users' source='responsibleId' label='Responsable' link='show'>
          <FunctionField render={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceField>
        <EditButton label='Editar' />
        {_get(permissions, 'lines.delete', false) && (
          <DeleteButtonWithConfirmation label='Eliminar' />
        )}
      </Datagrid>
    </List>
  )
})

export default LineList
