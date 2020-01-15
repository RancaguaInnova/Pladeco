import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField
} from "react-admin";
export const UserList = props => (
  <List {...props} title="Listado de Usuarios">
    <Datagrid rowClick="edit">
      <TextField source="firstName" label="Nombre" />
      <TextField source="lastName" label="Apellido" />
      <TextField source="identifier" label="Rut" />
      <TextField source="email.address" label="Email" />
      <ReferenceField label="Rol" source="role" reference="roles">
        <TextField source="name" />
      </ReferenceField>
      <EditButton label="Editar" />
      <DeleteButton label="Eliminar" />
    </Datagrid>
  </List>
);

export default UserList;
