import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AreaList from './list'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import { useSelectedValues } from '../../provider/context'

const AreaView = props => {
  const [{ workplanId }, dispatch] = useSelectedValues()
  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <WorkplanSelector />
      <Grid item xs={12}>
        {workplanId ? (
          <AreaList {...props} workplanId={workplanId} />
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
