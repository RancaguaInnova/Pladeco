import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SelectField,
  withDataProvider
} from 'react-admin'

import React from 'react'
import compose from 'recompose/compose'
import { makeStyles } from '@material-ui/core/styles'

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
        resource='actions'
        title=' '
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
          <TextField source='name' label='Nombre' className={classes.table} />
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
          <TextField source='weight' label='Peso' className={classes.table} />
          <EditButton label='Editar' className={classes.table} />
          <DeleteButton label='Eliminar' className={classes.table} />
        </Datagrid>
      </List>
    </div>
  )
}
export default compose(withDataProvider)(Event)
