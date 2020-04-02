import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReferenceField from '../ReferenceField'
import { useSelectedValues } from '../../provider/context'

export default props => {
  const [{ areaId, lineId }, dispatch] = useSelectedValues()

  return (
    <Grid item xs={12} md={6} lg={2}>
      <ReferenceField
        initialValue={lineId}
        name='Líneas'
        query={{
          type: 'getList',
          resource: 'lines',
          payload: {
            pagination: { page: 1, perPage: 3000 },
            sort: { field: 'name', order: 'desc' },
            filter: { areaId }
          }
        }}
        labelField='name'
        nullOptionLabel='Sin selección'
        helperText='Los Objetivos a mostrar se filtrarán en función de esta selección.'
        onChange={change => {
          dispatch({
            type: 'changeSelection',
            newSelections: { lineId: change }
          })
        }}
      />
    </Grid>
  )
}
