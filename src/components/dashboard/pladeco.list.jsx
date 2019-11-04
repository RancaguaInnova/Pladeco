import {
  BooleanField,
  Datagrid,
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
  },
  table: {
    fontSize: '0.8125rem',
    padding: '12px 8px',
    fontFamily: 'Roboto,Helvetica,Arial, sans-serif',
    fontWeight: 300,
    lineHeight: 1.42857143,
    verticalAlign: 'middle'
  }
}))

function Event(props) {
  const classes = useStyles()

  return (
    <div>
      <List
        resource='activities'
        title=' '
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
          <TextField source='name' label='Nombre' defaultValue='' className={classes.table} />
          <TextField
            source='description'
            label='Descripción'
            defaultValue=''
            className={classes.table}
          />
          <ReferenceField
            reference='actions'
            source='actionId'
            label='Acción'
            className={classes.table}
            linkType='show'
          >
            <TextField source='name' className={classes.table} />
          </ReferenceField>
          <SelectField
            source='status'
            label='Estado'
            className={classes.table}
            choices={[
              { id: 'not-started', name: 'No iniciado' },
              { id: 'in-progress', name: 'En progreso' },
              { id: 'finished', name: 'Finalizado' }
            ]}
          />
          <DateField
            source='createAt'
            label='Fecha de creación'
            defaultValue=''
            className={classes.table}
          />
          <BooleanField
            source='approved'
            label='Aprobado'
            defaultValue=''
            className={classes.table}
          />
          <EditButton label='Editar' className={classes.table} />
          <DeleteButton label='Eliminar' className={classes.table} />
        </Datagrid>
      </List>
    </div>
  )
}
export default compose(withDataProvider)(Event)
