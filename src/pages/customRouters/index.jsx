import React from 'react'
import { Route } from 'react-router-dom'
import { AccionValidation, AccionEdit } from '../activityValidation'

export default [
  <Route exact path='/AccionValidation' component={AccionValidation} />,
  <Route exact path='/AccionValidation/:id' component={AccionEdit} />
]
