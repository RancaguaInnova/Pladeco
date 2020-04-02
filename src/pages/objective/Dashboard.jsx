import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ObjectivesList from './list'
import ReferenceField from '../../helpers/ReferenceField'
import WaitingSelection from '../../helpers/WaitingSelection'

const LinesView = props => {
  let [workplan, setWorkplan] = useState(null)
  let [area, setArea] = useState(null)
  let [line, setLine] = useState(null)

  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <Grid item xs={12}>
        <Paper style={{ padding: '1rem 2rem' }}>
          <ReferenceField
            name='Plan de Trabajo'
            query={{
              type: 'getList',
              resource: 'workplans',
              payload: {
                pagination: { page: 1, perPage: 3000 },
                sort: { field: 'name', order: 'desc' },
                filter: {}
              }
            }}
            labelField='name'
            nullOptionLabel='Sin selección'
            helperText='Las Áreas a mostrar se filtrarán en función a esta selección.'
            onChange={setWorkplan}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ padding: '1rem 2rem' }}>
          {workplan ? (
            <ReferenceField
              name='Área'
              query={{
                type: 'getList',
                resource: 'areas',
                payload: {
                  pagination: { page: 1, perPage: 3000 },
                  sort: { field: 'name', order: 'desc' },
                  filter: {}
                }
              }}
              labelField='name'
              nullOptionLabel='Sin selección'
              helperText='Las Lineas a mostrar se filtrarán en función a el Área seleccionada.'
              onChange={setArea}
            />
          ) : (
            <WaitingSelection text='Esperando selección...' />
          )}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper style={{ padding: '1rem 2rem' }}>
          {area ? (
            <ReferenceField
              name='Líneas'
              query={{
                type: 'getList',
                resource: 'lines',
                payload: {
                  pagination: { page: 1, perPage: 3000 },
                  sort: { field: 'name', order: 'desc' },
                  filter: {}
                }
              }}
              labelField='name'
              nullOptionLabel='Sin selección'
              helperText='Los Objetivos a mostrar se filtrarán en función a la Línea seleccionada.'
              onChange={setLine}
            />
          ) : (
            <WaitingSelection text='Esperando selección...' />
          )}
          {line ? <ObjectivesList {...props} lineId={line} /> : null}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default LinesView
