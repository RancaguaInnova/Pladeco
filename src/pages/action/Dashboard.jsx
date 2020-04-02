import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import ActionsList from './list'
import ReferenceField from '../../helpers/ReferenceField'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'

const LinesView = props => {
  let [workplan, setWorkplan] = useState(null)
  let [area, setArea] = useState(null)
  let [line, setLine] = useState(null)
  let [objective, setObjective] = useState(null)

  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <WorkplanSelector />
      <AreaSelector />
      <Grid item xs={12} md={6} lg={2}>
        <ReferenceField
          name='Líneas'
          query={{
            type: 'getList',
            resource: 'lines',
            payload: {
              pagination: { page: 1, perPage: 3000 },
              sort: { field: 'name', order: 'desc' },
              filter: { areaId: area }
            }
          }}
          labelField='name'
          nullOptionLabel='Sin selección'
          helperText='Los Objetivos a mostrar se filtrarán en función a la Línea seleccionada.'
          onChange={setLine}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <ReferenceField
          name='Objetivos'
          query={{
            type: 'getList',
            resource: 'objectives',
            payload: {
              pagination: { page: 1, perPage: 3000 },
              sort: { field: 'name', order: 'desc' },
              filter: { lineId: line }
            }
          }}
          labelField='name'
          nullOptionLabel='Sin selección'
          helperText='Las Acciones a mostrar se filtrarán en función al Objetivo seleccionado.'
          onChange={setObjective}
        />
      </Grid>
      <Grid item xs={12}>
        {objective ? <ActionsList {...props} objectiveId={objective} /> : null}
      </Grid>
    </Grid>
  )
}

export default LinesView
