import React from "react"
import {
  TextInput,
  SimpleForm,
  SelectInput,
  required,
  minLength,
  maxLength,
  DateInput,
  ReferenceInput,
  NumberInput,
  BooleanInput,
  Edit,
  ReferenceArrayInput,
  SelectArrayInput,
  TextField,
  ReferenceField,
  ReferenceArrayField,
  SelectField,
  ArrayField,
  Datagrid,
  ImageInput,
  ImageField,
  FileInput,
  FileField,
} from "react-admin"
import ImageViewerField from "../../helpers/fields/ImageViewerField"
import PdfFileField from "../../helpers/fields/PdfFileField"

const validateName = [required(), minLength(0), maxLength(550)]
const ActionEdit = ({ permissions, ...props }) => {
  return (
    <Edit title="Editar acción" {...props}>
      {permissions && permissions.actions && permissions.actions.validate ? (
        <SimpleForm>
          <TextField source="name" label="Nombre" validate={validateName} />
          <TextField source="description" label="Descripción" validate={validateName} />
          <ReferenceField reference="users" source="responsibleId" label="Responsable">
            <TextField source="identifier" />
          </ReferenceField>
          <ReferenceArrayField source="dependsOnIds" reference="actions" label="Depende de:">
            <TextField source="name" />
          </ReferenceArrayField>
          <SelectField
            source="status"
            label="Estado"
            choices={[
              { id: "not-started", name: "No iniciado" },
              { id: "in-progress", name: "En progreso" },
              { id: "finished", name: "Finalizado" },
            ]}
          />
          <TextField source="initialDate" label="Fecha de inicio" />
          <TextField source="endDate" label="Fecha de termino" />
          <TextField source="weight" label="Peso" />
          <ReferenceField reference="objectives" source="objectiveId" label="Objetivos">
            <TextField source="name" />
          </ReferenceField>
          <ImageViewerField source="images" label="Imagenes"></ImageViewerField>

          <ArrayField source="documents" label="Documentos">
            <Datagrid>
              <PdfFileField source="src" label="Listado de documentos" />
            </Datagrid>
          </ArrayField>
          <BooleanInput label="Aprobado" source="approved" defaultValue={false} />
        </SimpleForm>
      ) : (
        <SimpleForm>
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
          <DateInput source="endDate" label="Fecha de termino" />
          <NumberInput source="weight" label="Peso" />
          <ReferenceInput reference="objectives" source="objectiveId" label="Objetivos">
            <SelectInput optionText="name" />
          </ReferenceInput>
          <ImageInput source="images" label="Imagenes" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
          <FileInput source="documents" label="Documentos" accept="application/pdf" multiple>
            <FileField source="src" title="title" />
          </FileInput>
          <BooleanInput source="approved" />
        </SimpleForm>
      )}
    </Edit>
  )
}
export default ActionEdit
