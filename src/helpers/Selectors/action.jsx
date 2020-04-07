import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReferenceField from '../ReferenceField'
import { useSelectedValues } from '../../provider/context'

export default props => {
  const [{ objectiveId, actionId }, dispatch] = useSelectedValues()

  return (
    <Grid item xs={12} md={6} lg={2}>
      <ReferenceField
        initialValue={actionId}
        name='Acciones'
        query={{
          type: 'getList',
          resource: 'actions',
          payload: {
            pagination: { page: 1, perPage: 3000 },
            sort: { field: 'name', order: 'desc' },
            filter: { objectiveId }
          }
        }}
        labelField='name'
        nullOptionLabel='Sin selección'
        helperText='Las Actividades a mostrar se filtrarán en función de esta selección.'
        onChange={change => {
          dispatch({
            type: 'changeSelection',
            newSelections: { actionId: change }
          })
        }}
      />
    </Grid>
  )
}
