import React from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesSelector from '../../helpers/Selectors/line'
import ObjectivesSelector from '../../helpers/Selectors/objective'
import ActionsSelector from '../../helpers/Selectors/action'
import ActivitiesList from './list'
import { useSelectedValues } from '../../provider/context'

const ActivitiesView = props => {
  let [{ actionId }] = useSelectedValues()
  console.log(actionId)
  return (
    <Grid container spacing={3} style={{ marginTop: '2rem' }}>
      <WorkplanSelector {...props} />
      <AreaSelector {...props} />
      <LinesSelector {...props} />
      <ObjectivesSelector {...props} />
      <ActionsSelector {...props} />
      <Grid item xs={12}>
        {actionId ? <ActivitiesList {...props} /> : null}
      </Grid>
    </Grid>
  )
}

export default ActivitiesView
