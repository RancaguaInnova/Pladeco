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
  BooleanInput,
  ReferenceArrayField,
  SingleFieldList,
  ReferenceArrayInput,
  SelectArrayInput,
  ChipField
} from 'react-admin'
import { withStyles } from '@material-ui/core/styles'
const styles = {
  hidden: {
    display: 'none'
  }
}

const validateName = [required(), minLength(2), maxLength(150)]
const ActionCreateToolbar = props => (
  <Toolbar {...props}>
    <SaveButton label='Guardar y Mostrar' redirect='show' submitOnEnter={true} />
    <SaveButton label='Guardar y Agregar' redirect={false} submitOnEnter={false} variant='flat' />
  </Toolbar>
)


const ActionCreate = withStyles(styles)(({ classes, ...props }) => {
  return (
    <Create title='Crear Acción' {...props} >
      <SimpleForm toolbar={<ActionCreateToolbar />}>
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
        <DateInput source='endDate' label='Fecha de término' />
        <NumberInput source='weight' label='Peso' />
        <ReferenceInput reference='objectives' source='objectiveId' label='Objetivos'>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <BooleanInput label='Aprobado' source='approved' defaultValue={false} />
      </SimpleForm>
    </Create>
  )
})
export default ActionCreate