import React from "react";
import {
  Show,
  TextField,
  SimpleShowLayout,
  ReferenceField,
  FunctionField
} from "react-admin";

const LineShow = props => (
  <Show {...props} title="Linea">
    <SimpleShowLayout>
      <TextField source="name" label="Nombre" defaultValue="" />
      <TextField source="description" label="Descripción" defaultValue="" />
      <ReferenceField
        reference="areas"
        source="areaId"
        label="Area"
        link="show"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField
        reference="users"
        source="responsibleId"
        label="Responsable"
        link="show"
      >
        <FunctionField
          render={record => `${record.firstName} ${record.lastName}`}
        />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
export default LineShow;
