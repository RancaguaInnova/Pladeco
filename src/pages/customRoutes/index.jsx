import React from 'react'
import { Route } from 'react-router-dom'
import { AccionValidation, AccionEdit } from '../activityValidation'
import Register from '../Register'

export default [
  <Route exact path='/AccionValidation' component={AccionValidation} />,
  <Route exact path='/AccionValidation/:id' component={AccionEdit} />,
  <Route path='/registro' render={() => <Register />} noLayout />
]
