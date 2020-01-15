import React from "react";
import { Show, TextField, SimpleShowLayout, ReferenceField } from "react-admin";

const UserShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="firstName" label="Nombre" />
      <TextField source="lastName" label="Apellido" />
      <TextField source="identifier" label="Rut" />
      <TextField source="email.address" label="Email" />
      <ReferenceField label="Rol" source="role" reference="roles">
        <TextField source="name" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
export default UserShow;
