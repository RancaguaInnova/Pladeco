import React from "react";
import { Route } from "react-router-dom";
import { AccionValidation, AccionEdit } from "../activityValidation";
import Dashboard from "../dashboard";
import Register from "../Register";
import ActionAll from "../action/list_all"

export default [
  <Route exact path="/" component={Dashboard} />,
  <Route exact path="/accion/all" component={ActionAll} />,

  <Route exact path="/AccionValidation" component={AccionValidation} />,
  <Route exact path="/AccionValidation/:id" component={AccionEdit} />,
  <Route path="/registro" render={() => <Register />} noLayout />
];
