import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
  FunctionField
} from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import { useSelectedValues } from '../../provider/context'

const listStyles = {
  thead: {
    background: 'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color: '#fff !important'
  }
}

export const LineList = withStyles(listStyles)(({ classes, ...props }) => {
  let [{ areaId }, dispatch] = useSelectedValues()
  return (
    <List {...props} title='Lineas' filter={{ areaId }}>
      <Datagrid rowClick='edit' classes={classes}>
        <TextField source='name' label='Nombre' defaultValue='' />
        <ReferenceField reference='areas' source='areaId' label='Area' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <ReferenceField reference='users' source='responsibleId' label='Responsable' link='show'>
          <FunctionField render={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceField>
        <EditButton label='Editar' />
        <DeleteButton label='Eliminar' />
      </Datagrid>
    </List>
  )
})

export default LineList
