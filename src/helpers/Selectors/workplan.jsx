import React from 'react'
import Grid from '@material-ui/core/Grid'
import ReferenceField from '../ReferenceField'
import { useSelectedValues } from '../../provider/context'

export default props => {
  const [{ workplanId }, dispatch] = useSelectedValues()

  return (
    <Grid item xs={12} md={6} lg={2}>
      <ReferenceField
        initialValue={workplanId}
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
        onChange={change => {
          dispatch({
            type: 'changeSelection',
            newSelections: { workplanId: change }
          })
        }}
      />
    </Grid>
  )
}
