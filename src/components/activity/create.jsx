import React, { Component } from 'react'
import {
  TextInput,
  SimpleForm,
  Create,
  DateInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  ImageInput,
  ImageField,
  FileInput,
  FileField,

  REDUX_FORM_NAME,
} from 'react-admin'
import { change, submit, isSubmitting } from "redux-form";

import SearchGoogle from '../../helpers/fields/inputSearchPlace'
import _merge from 'lodash/merge'
import _includes from 'lodash/includes'
import { crudCreate, SaveButton, Toolbar } from 'react-admin'
import SaveWithLocationButton from './saveButton'
import Button from '@material-ui/core/Button'
const validateActivityCreation = values => {
  const errors = {}
  if (!values.name) {
    errors.name = ['El nombre de la actividad es requerido']
  }
  if (!values.description) {
    errors.description = ['La descripción de la actividad es requerida']
  }
  if (!values.actionId) {
    errors.actionId = ['Debe asociar la actividad a una acción']
  }
  if (!values.beneficiaries) {
    errors.beneficiaries = ['Debe agregar los beneficiarios de la  actividad']
  }
  if (!values.status) {
    errors.status = ['Debe agregar el estado de la actividad']
  }
  if (!values.createAt) {
    errors.createAt = ['Debe agregar la fecha de creacion de la actividad']
  }
  if (!values.location) {
    errors.location = ['Debe agregar la localización']
  }

  return errors
}

const ActivityCreate = props => {
  const [data, setData] = React.useState(props)
  const [datos, setDatos] = React.useState('')
  const [locationData, setLocationData] = React.useState({})




  return (
    <Create title='Crear Actividad' {...props}>
      <SimpleForm validate={validateActivityCreation}>
        <TextInput source='name' label='Nombre' defaultValue='' className='TextInput' />
        <TextInput source='description' label='Descripción' defaultValue='' className='TextInput' />

        <ReferenceInput reference='actions' source='actionId' label='Acción' className='TextInput'>
          <SelectInput optionText='name' />
        </ReferenceInput>
        <SelectInput
          source='status'
          label='Estado'
          choices={[
            { id: 'not-started', name: 'No iniciado' },
            { id: 'in-progress', name: 'En progreso' },
            { id: 'finished', name: 'Finalizado' }
          ]}
        />
        <DateInput source='createAt' label='Fecha de creación' defaultValue='' />
        <ReferenceInput
          reference='users'
          source='responsibleId'
          label='Responsable'
          className='TextInput'
        >
          <SelectInput
            optionText={record => {
              return (
                <span>
                  {record.firstName} {record.lastName}
                </span>
              )
            }}
          />
        </ReferenceInput>
        <ArrayInput source='executedFunds' label='Fondos ejecutados' className='TextInput'>
          <SimpleFormIterator>
            <TextInput source='source' label='source' />
            <NumberInput source='amount' label='Monto' />
          </SimpleFormIterator>
        </ArrayInput>
        <ReferenceArrayInput
          reference='users'
          source='coordinatedWith'
          label='Coordinado con'
          className='TextInput'
        >
          <SelectArrayInput
            optionText={record => {
              return (
                <span>
                  {record.firstName} {record.lastName}
                </span>
              )
            }}
          />
        </ReferenceArrayInput>
        <ArrayInput source='beneficiaries' label='Beneficiarios'>
          <SimpleFormIterator>
            <TextInput source='description' label='Descripción' />
            <NumberInput source='quantity' label='Cantidad' />
          </SimpleFormIterator>
        </ArrayInput>
        <SearchGoogle />

        <TextInput source='comments' label='Comentarios' defaultValue='' className='TextInput' />
        <ArrayInput source='transversality' label='Transversalidad'>
          <SimpleFormIterator>
            <ReferenceInput reference='areas' source='areaId' label='Area'>
              <SelectInput optionText='name' />
            </ReferenceInput>
            <ReferenceInput reference='lines' source='lineId' label='Linea'>
              <SelectInput optionText='name' />
            </ReferenceInput>
            <ReferenceInput reference='objectives' source='objectiveId' label='Objetivo'>
              <SelectInput optionText='name' />
            </ReferenceInput>
            <ReferenceInput reference='actions' source='actionId' label='Acción'>
              <SelectInput optionText='name' />
            </ReferenceInput>
          </SimpleFormIterator>
        </ArrayInput>
        <ImageInput source='images' label='Imagenes' accept='image/*'>
          <ImageField source='src' title='title' />
        </ImageInput>
        <FileInput source='documents' label='Documentos' accept='application/pdf' multiple>
          <FileField source='src' title='title' />
        </FileInput>
      </SimpleForm>
    </Create>
  )
}
export default ActivityCreate
