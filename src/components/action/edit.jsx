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
  SelectArrayInput
} from 'react-admin'
const validateName = [required(), minLength(0), maxLength(550)]

const ActionEdit = props => {
  props.permissions ? console.log(props.permissions.actions) : console.log('nada')
  return (
    <Edit title='Editar acción' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' validate={validateName} />
        <TextInput source='description' label='Descripción' validate={validateName} />
        <ReferenceInput
          reference='users'
          source='responsibleId'
          label='Responsable'
          linkType='show'
        >
          <SelectInput optionText='identifier' />
        </ReferenceInput>
        <ReferenceArrayInput
          source='dependsOnIds'
          reference='actions'
          label='Depende de:'
          linkType='show'
        >
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
        <ReferenceInput
          reference='objectives'
          source='objectiveId'
          label='Objetivos'
          linkType='show'
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
        <BooleanInput label='Aprobado' source='approved' defaultValue={false} />
      </SimpleForm>
    </Edit>
  )
}
export default ActionEdit
