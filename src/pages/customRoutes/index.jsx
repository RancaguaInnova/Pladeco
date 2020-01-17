import React from "react"
import { Route } from "react-router-dom"
import { AccionValidation, AccionEdit } from "../activityValidation"
import Dashboard from "../dashboard"
import Register from "../Register"

export default [
  <Route exact path="/" component={Dashboard} />,
  <Route exact path="/registro" component={Register} noLayout />,
  <Route exact path="/AccionValidation" component={AccionValidation} />,
  <Route exact path="/AccionValidation/:id" component={AccionEdit} />
]
