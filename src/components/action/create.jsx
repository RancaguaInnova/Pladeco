import React from "react"
import {
  TextInput,
  SimpleForm,
  Create,
  SelectInput,
  required,
  minLength,
  maxLength,
  SaveButton,
  Toolbar,
  DateInput,
  ReferenceInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ImageInput,
  ImageField,
  FileField,
  FileInput,
  BooleanInput,
} from "react-admin"

const validateName = [required(), minLength(0), maxLength(550)]
const ActionCreateToolbar = props => (
  <Toolbar {...props}>
    <SaveButton label="Guardar y Mostrar" redirect="show" submitOnEnter={true} />
    <SaveButton label="Guardar y Agregar" redirect={false} submitOnEnter={false} variant="flat" />
  </Toolbar>
)

const ActionCreate = ({ classes, ...props }) => {
  return (
    <Create label="Crear" title="Crear Acción" {...props}>
      <SimpleForm toolbar={<ActionCreateToolbar />}>
        <TextInput source="name" label="Nombre" validate={validateName} />
        <TextInput source="description" label="Descripción" validate={validateName} />
        <ReferenceInput reference="users" source="responsibleId" label="Responsable">
          <SelectInput optionText="identifier" />
        </ReferenceInput>
        <ReferenceArrayInput source="dependsOnIds" reference="actions" label="Depende de:">
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="Estado"
          choices={[
            { id: "not-started", name: "No iniciado" },
            { id: "in-progress", name: "En progreso" },
            { id: "finished", name: "Finalizado" },
          ]}
        />
        <DateInput source="initialDate" label="Fecha de inicio" />
        <DateInput source="endDate" label="Fecha de término" />
        <NumberInput source="weight" label="Peso" />
        <ReferenceInput reference="objectives" source="objectiveId" label="Objetivos">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ImageInput source="images" label="Imagenes" accept="image/*" multiple>
          <ImageField source="src" title="title" />
        </ImageInput>

        <FileInput source="documents" label="Documentos" accept="application/pdf" multiple>
          <FileField source="src" title="title" />
        </FileInput>
        <BooleanInput source="approved" />
      </SimpleForm>
    </Create>
  )
}
export default ActionCreate
