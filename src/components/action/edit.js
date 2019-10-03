import React from 'react'
import {
  TextInput,
  SimpleForm,
  Create,
  SelectInput,
  required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices,
  SaveButton,
  Toolbar,
  DateInput,
  ReferenceInput,
  NumberInput,
  BooleanInput,Edit,
  ReferenceArrayInput,
  SelectArrayInput,
  ChipField

} from 'react-admin'
const validateName = [required(), minLength(2), maxLength(150)]

const ActionEdit = props => {
  return (
    <Edit title='Editar acción' {...props}>
      <SimpleForm >
      <TextInput source='name' label='Nombre' validate={validateName} />
        <TextInput source='description' label='Descripción' validate={validateName} />
        <ReferenceInput reference='users' source='responsibleId' label='Responsable'>
          <SelectInput optionText='identifier' />
        </ReferenceInput>
        <ReferenceArrayInput source='dependsOnIds' reference='actions' label="Depende de:">
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
        <BooleanInput label="Aprobado" source="approved" defaultValue={false}/>
      </SimpleForm>
    </Edit>
  )
}
export default ActionEdit
