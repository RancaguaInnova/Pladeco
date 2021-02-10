import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
  SelectField,
  Filter,
  TextInput,
  SelectInput
} from 'react-admin'
import DateField from '../../helpers/fields/DateField'
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

const ActivityFilter = props => (
  <Filter {...props}>
    <TextInput label='Buscar' source='name' alwaysOn />
    <SelectInput
      alwaysOn
      source='status'
      label='Estado'
      choices={[
        { id: 'not-started', name: 'No iniciado' },
        { id: 'in-progress', name: 'En progreso' },
        { id: 'finished', name: 'Finalizado' }
      ]}
    />
  </Filter>
)

export const ActivityList = withStyles(listStyles)(({ classes, ...props }) => {
  let [{ actionId }] = useSelectedValues()
  const { permissions } = usePermissions()

  return (
    <List
      {...props}
      title='Actividades'
      filters={<ActivityFilter />}
      filter={{ actionId: actionId }}
    >
      <Datagrid rowClick='edit' classes={classes}>
        <TextField source='name' label='Nombre' defaultValue='' />
        <TextField source='description' label='Descripción' defaultValue='' />
        <ReferenceField reference='actions' source='actionId' label='Acción' link='show'>
          <TextField source='name' />
        </ReferenceField>
        <SelectField
          source='status'
          label='Estado'
          choices={[
            { id: 'not-started', name: 'No iniciado' },
            { id: 'in-progress', name: 'En progreso' },
            { id: 'finished', name: 'Finalizado' }
          ]}
        />
        <DateField source='createAt' label='Fecha de creación' defaultValue='' />
        <EditButton label='Editar' />
        {_get(permissions, 'activities.delete', false) && (
          <DeleteButtonWithConfirmation label='Eliminar' />
        )}
      </Datagrid>
    </List>
  )
})

export default ActivityList
