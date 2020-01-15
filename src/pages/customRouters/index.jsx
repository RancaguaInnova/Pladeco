import React from "react";
import { Route } from "react-router-dom";
import { AccionValidation, AccionEdit } from "../activityValidation";
import Dashboard from "../dashboard";

export default [
  <Route exact path="/" component={Dashboard} />,

  <Route exact path="/AccionValidation" component={AccionValidation} />,
  <Route exact path="/AccionValidation/:id" component={AccionEdit} />
];
