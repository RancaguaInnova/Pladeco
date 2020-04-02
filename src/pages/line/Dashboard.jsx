import React from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesList from './list'
import { useSelectedValues } from '../../provider/context'

const LinesView = props => {
  let [{ areaId }, dispatch] = useSelectedValues()

  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <WorkplanSelector />
      <AreaSelector />
      <Grid item xs={12}>
        {areaId ? <LinesList {...props} areaId={areaId} /> : null}
      </Grid>
    </Grid>
  )
}

export default LinesView
