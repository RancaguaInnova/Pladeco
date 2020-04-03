import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, ReferenceField } from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
import { useSelectedValues } from '../../provider/context'

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
  let [{ workplanId }, dispatch] = useSelectedValues()
  return (
    <List {...props} title='Áreas' filter={{ workplanId }}>
      <Datagrid rowClick='edit' classes={classes}>
        <TextField source='name' label='Nombre' defaultValue='' />
        <ReferenceField label='Pladeco' source='workplanId' reference='workplans' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <EditButton label='Editar' />
        <DeleteButton label='Eliminar' />
      </Datagrid>
    </List>
  )
})

export default AreaList
