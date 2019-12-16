import React from 'react'
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
  Pagination,
  ReferenceManyField,
  BooleanField
} from 'react-admin'

import ActivityQuickPreviewButton from './ActivityPreviewView'
import { Field } from 'redux-form'

const validateName = [required(), minLength(0), maxLength(550)]

const ActionRowStyle = (record, index) => ({
  backgroundColor: index % 2 === 0 ? '#efe' : 'white'
})

const ActionEdit = ({ permissions, ...props }) => {
  return (
    <Edit title='Editar acción' {...props}>
      {permissions && permissions.actions && permissions.actions.validate ? (
        <SimpleForm>
          <TextField source='name' label='Nombre' validate={validateName} />
          <TextField source='description' label='Descripción' validate={validateName} />
          <ReferenceField reference='users' source='responsibleId' label='Responsable'>
            <TextField source='identifier' />
          </ReferenceField>
          <ReferenceArrayField source='dependsOnIds' reference='actions' label='Depende de:'>
            <TextField source='name' />
          </ReferenceArrayField>
          <SelectField
            source='status'
            label='Estado'
            choices={[
              { id: 'not-started', name: 'No iniciado' },
              { id: 'in-progress', name: 'En progreso' },
              { id: 'finished', name: 'Finalizado' }
            ]}
          />
          <TextField source='initialDate' label='Fecha de inicio' />
          <TextField source='endDate' label='Fecha de termino' />
          <TextField source='weight' label='Peso' />
          <ReferenceField reference='objectives' source='objectiveId' label='Objetivos'>
            <TextField source='name' />
          </ReferenceField>

          <ReferenceManyField
            label='Actividades'
            reference='activities'
            target='actionId'
            pagination={<Pagination />}
          >
            <Datagrid rowStyle={ActionRowStyle}>
              <TextField source='name' label='Nombre' defaultValue='' />
              <TextField source='description' label='Descripción' defaultValue='' />
              <BooleanField source='approved' label='Arpobado' defaultValue={false} />

              <Field
                name='id'
                component={({ record }) => {
                  return record.id && <ActivityQuickPreviewButton id={record.id} />
                }}
              />
            </Datagrid>
          </ReferenceManyField>
          <BooleanInput label='Aprobado' source='approved' defaultValue={false} />
        </SimpleForm>
      ) : (
        <SimpleForm>
          <TextInput source='name' label='Nombre' validate={validateName} />
          <TextInput source='description' label='Descripción' validate={validateName} />
          <ReferenceInput reference='users' source='responsibleId' label='Responsable'>
            <SelectInput optionText='identifier' />
          </ReferenceInput>
          <ReferenceArrayInput source='dependsOnIds' reference='actions' label='Depende de:'>
            <SelectArrayInput optionText='name' />
          </ReferenceArrayInput>
          <SelectInput
            source='status'
            label='Estado'
            choices={[
              { id: 'not-started', name: 'No iniciado' },
              { id: 'in-progress', name: 'En progreso' },
              { id: 'finished', name: 'Finalizado' }
            ]}
          />
          <DateInput source='initialDate' label='Fecha de inicio' />
          <DateInput source='endDate' label='Fecha de termino' />
          <NumberInput source='weight' label='Peso' />
          <ReferenceInput reference='objectives' source='objectiveId' label='Objetivos'>
            <SelectInput optionText='name' />
          </ReferenceInput>

          <BooleanInput source='approved' />
        </SimpleForm>
      )}
    </Edit>
  )
}
export default ActionEdit
