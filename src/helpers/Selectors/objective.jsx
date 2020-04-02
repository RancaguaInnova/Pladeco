import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReferenceField from '../ReferenceField'
import { useSelectedValues } from '../../provider/context'

export default props => {
  const [{ lineId, objectiveId }, dispatch] = useSelectedValues()

  return (
    <Grid item xs={12} md={6} lg={2}>
      <ReferenceField
        initialValue={objectiveId}
        name='Objetivos'
        query={{
          type: 'getList',
          resource: 'objectives',
          payload: {
            pagination: { page: 1, perPage: 3000 },
            sort: { field: 'name', order: 'desc' },
            filter: { lineId }
          }
        }}
        labelField='name'
        nullOptionLabel='Sin selección'
        helperText='Las Acciones a mostrar se filtrarán en función de esta selección.'
        onChange={change => {
          dispatch({
            type: 'changeSelection',
            newSelections: { objectiveId: change }
          })
        }}
      />
    </Grid>
  )
}
