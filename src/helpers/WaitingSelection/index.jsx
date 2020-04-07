import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const WaitingSelection = ({ text }) => (
  <Paper style={{ padding: '1rem 2rem', textAlign: 'center', marginTop: '2rem' }}>
    <Typography variant='h6'>{text}</Typography>
  </Paper>
)

export default WaitingSelection
