import React from 'react'
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
  BooleanInput
} from 'react-admin'
import { useSelectedValues } from '../../provider/context'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    marginRight: 10
  }
})

const validateName = [required(), minLength(0), maxLength(550)]

const ActionCreateToolbar = props => {
  const classes = useStyles()

  return (
    <Toolbar {...props}>
      <SaveButton
        label='Guardar y Mostrar'
        redirect='show'
        submitOnEnter
        className={classes.button}
        {...props}
      />
      <SaveButton
        label='Guardar y Agregar'
        redirect={false}
        submitOnEnter={false}
        className={classes.button}
        {...props}
      />
    </Toolbar>
  )
}

const ActionCreate = ({ classes, ...props }) => {
  let [{ lineId, objectiveId }] = useSelectedValues()
  return (
    <Create label='Crear' title='Crear Acción' {...props}>
      <SimpleForm toolbar={<ActionCreateToolbar />}>
        <TextInput source='name' label='Nombre' validate={validateName} />
        <TextInput source='description' label='Descripción' validate={validateName} />
        <ReferenceInput reference='users' source='responsibleId' label='Responsable' perPage={500}>
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
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
        {/* <NumberInput source='weight' label='Peso' /> */}
        <ReferenceInput
          reference='objectives'
          source='objectiveId'
          label='Objetivos'
          perPage={500}
          filter={{ lineId }}
        >
          <SelectInput optionText='name' value={objectiveId} />
        </ReferenceInput>
        <ImageInput source='images' label='Imagenes' accept='image/*' multiple>
          <ImageField source='src' title='title' />
        </ImageInput>

        <FileInput source='documents' label='Documentos' accept='application/pdf' multiple>
          <FileField source='src' title='title' />
        </FileInput>
        <SelectInput
          source='original'
          label='Actividad existente en PLADECO (original)'
          choices={[
            { id: 'original', name: 'Original' },
            { id: 'agregada', name: 'Nueva' }
          ]}
        />
      </SimpleForm>
      <BooleanInput source='approved' />
    </Create>
  )
}

export default ActionCreate
