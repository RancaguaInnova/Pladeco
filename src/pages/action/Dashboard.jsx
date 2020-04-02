import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesSelector from '../../helpers/Selectors/line'
import ObjectivesSelector from '../../helpers/Selectors/objective'
import ActionsList from './list'
import { useSelectedValues } from '../../provider/context'

const ActionsView = props => {
  let [{ objectiveId }, dispatch] = useSelectedValues()
  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <WorkplanSelector />
      <AreaSelector />
      <LinesSelector />
      <ObjectivesSelector />
      <Grid item xs={12}>
        {objectiveId ? <ActionsList {...props} objectiveId={objectiveId} /> : null}
      </Grid>
    </Grid>
  )
}

export default ActionsView
