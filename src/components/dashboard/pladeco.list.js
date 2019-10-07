import {
  BooleanField,
  Datagrid,
  FunctionField,
  List,
  ReferenceField,
  TextField,
  withDataProvider,
  SelectField,
  EditButton,
  DeleteButton
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
        resource='activities'
        title=''
        basePath='/activities'
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
          <TextField source='name' label='Nombre' defaultValue='' />
          <TextField source='description' label='Descripción' defaultValue='' />
          <ReferenceField reference='actions' source='actionId' label='Acción'>
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
          <BooleanField source='approved' label='Aprobado' defaultValue='' />
          <EditButton label='Editar' />
          <DeleteButton label='Eliminar' />
        </Datagrid>
      </List>
    </div>
  )
}
export default compose(withDataProvider)(Event)
