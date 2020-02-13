import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AreaList from './list'
import ReferenceField from '../../helpers/ReferenceField'

const AreaView = props => {
  let [collectionName, setCollectionName] = useState(null)
  console.log('COLLECTIONNAME:', collectionName)

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
            onChange={setCollectionName}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        {collectionName ? (
          <AreaList {...props} workplanId={collectionName} />
        ) : (
          <Paper style={{ padding: '1rem 2rem', textAlign: 'center', marginTop: '2rem' }}>
            <Typography variant='h6'>Esperando selección...</Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
  )
}

export default AreaView
