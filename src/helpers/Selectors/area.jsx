import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReferenceField from '../ReferenceField'
import { useSelectedValues } from '../../provider/context'

export default props => {
  const [{ areaId, workplanId }, dispatch] = useSelectedValues()

  return (
    <Grid item xs={12} md={6} lg={2}>
      <ReferenceField
        initialValue={areaId}
        name='Areas'
        query={{
          type: 'getList',
          resource: 'areas',
          payload: {
            pagination: { page: 1, perPage: 3000 },
            sort: { field: 'name', order: 'desc' },
            filter: { workplanId }
          }
        }}
        labelField='name'
        nullOptionLabel='Sin selección'
        helperText='Las Líneas a mostrar se filtrarán en función de esta selección.'
        onChange={change => {
          dispatch({
            type: 'changeSelection',
            newSelections: { areaId: change }
          })
        }}
      />
    </Grid>
  )
}
