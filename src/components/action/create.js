import React from 'react'
import {
  TextInput, SimpleForm, Create, SelectInput, required,
  minLength,
  maxLength,
  minValue,
  maxValue,
  number,
  regex,
  email,
  choices
  , SaveButton, Toolbar
} from 'react-admin'

const validateName = [required(), minLength(2), maxLength(150)];
const ActionCreateToolbar = props => (
  <Toolbar {...props} >
    <SaveButton
      label="Guardar y Mostrar"
      redirect="show"
      submitOnEnter={true}
    />
    <SaveButton
      label="Guardar y Agregar"
      redirect={false}
      submitOnEnter={false}
      variant="flat"
    />
  </Toolbar>
);
const ActionCreate = props => {
  return (
    <Create title='Crear Acción' {...props}>
      <SimpleForm toolbar={<ActionCreateToolbar />} >
        <TextInput source='name' label='Nombre' validate={validateName} />
        <TextInput source='responsible' label='Responsable' validate={validateName} />
        <TextInput source='dependensOn' label='Depende de:' />
        <TextInput source='state' label='Estado' />
        <TextInput source='initialDate' label='Fecha de inicio' />
        <TextInput source='endDate' label='Fecha de termino' />
        <TextInput source='weight' label='Peso' />
        <SelectInput source='objetive' label='Objetivo' />
      </SimpleForm>
    </Create>
  )
}
export default ActionCreate
