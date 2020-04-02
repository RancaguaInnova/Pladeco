import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesSelector from '../../helpers/Selectors/line'
import ObjectivesList from './list'
import { useSelectedValues } from '../../provider/context'

const ObjectivesView = props => {
  let [{ lineId }, dispatch] = useSelectedValues()

  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <WorkplanSelector />
      <AreaSelector />
      <LinesSelector />
      <Grid item xs={12}>
        {lineId ? <ObjectivesList {...props} lineId={lineId} /> : null}
      </Grid>
    </Grid>
  )
}

export default ObjectivesView
