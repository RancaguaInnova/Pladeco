import React from "react"
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin"
import { withStyles } from "@material-ui/core/styles"

const listStyles = {
  thead: {
    background: "linear-gradient(60deg, #26c6da, #BCD6DD)",
    color: "#fff",
  },
  table: {
    color: "#fff",
  },
}

export const RolesList = withStyles(listStyles)(({ classes, ...props }) => (
  <List {...props} title="Roles">
    <Datagrid rowClick="edit" classes={classes}>
      <TextField source="name" label="Nombre" />
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
))

export default RolesList
