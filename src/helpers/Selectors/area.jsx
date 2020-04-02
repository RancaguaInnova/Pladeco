import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import ReferenceField from '../ReferenceField'

export default props => {
  let [area, setArea] = useState(null)

  return (
    <Grid item xs={12} md={6} lg={2}>
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
    </Grid>
  )
}
