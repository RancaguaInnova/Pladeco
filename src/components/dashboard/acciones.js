import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  SelectField,
  withDataProvider
} from 'react-admin'

import React from 'react'
import compose from 'recompose/compose'
import { makeStyles } from '@material-ui/core/styles'
import DateField from '../../helpers/fields/DateField'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}))

function Event(props) {
  const classes = useStyles()

  return (
    <div>
      <List
        resource='actions'
        title='Acciones'
        basePath='/actions'
        hasCreate={false}
        hasEdit={false}
        hasList={false}
        hasShow={false}
        location={props.location}
        match={props.match}
        option={props.options}
        permissions={props.permissions}
      >
        <Datagrid>
          <TextField source='name' label='Nombre' />
          <SelectField
            source='status'
            label='Estado'
            choices={[
              { id: 'not-started', name: 'No iniciado' },
              { id: 'in-progress', name: 'En progreso' },
              { id: 'finished', name: 'Finalizado' }
            ]}
          />
          <TextField source='weight' label='Peso' />
          <EditButton label='Editar' />
          <DeleteButton label='Eliminar' />
        </Datagrid>
      </List>
    </div>
  )
}
export default compose(withDataProvider)(Event)
