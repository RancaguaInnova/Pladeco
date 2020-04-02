import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesSelector from '../../helpers/Selectors/line'
import ObjectivesSelector from '../../helpers/Selectors/objective'
import ActionsSelector from '../../helpers/Selectors/action'
import ActivitiesList from './list'
import { useSelectedValues } from '../../provider/context'

const ActivitiesView = props => {
  let [{ actionId }, dispatch] = useSelectedValues()
  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <WorkplanSelector />
      <AreaSelector />
      <LinesSelector />
      <ObjectivesSelector />
      <ActionsSelector />
      <Grid item xs={12}>
        {actionId ? <ActivitiesList {...props} actionId={actionId} /> : null}
      </Grid>
    </Grid>
  )
}

export default ActivitiesView
