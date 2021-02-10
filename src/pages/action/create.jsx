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
import './styles.css'

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
      <div className={'marginButton'}>
        <SaveButton
          label='Guardar y Mostrar'
          redirect='show'
          submitOnEnter
          className={classes.button}
          {...props}
        />
      </div>
      <div className={'marginButton'}>
        <SaveButton
          label='Guardar y Agregar'
          redirect={false}
          submitOnEnter={false}
          className={classes.button}
          {...props}
        />{' '}
      </div>
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
        <ReferenceInput
          reference='users'
          source='responsibleId'
          label='Responsable'
          perPage={500}
          sort={{ field: 'firstName', order: 'ASC' }}
        >
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceInput>
        <ReferenceArrayInput
          source='dependsOnIds'
          reference='actions'
          label='Depende de:'
          perPage={500}
          sort={{ field: 'name', order: 'ASC' }}
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
        <DateInput source='endDate' label='Fecha de término' />
        <ReferenceInput
          reference='objectives'
          source='objectiveId'
          label='Objetivos'
          perPage={500}
          filter={{ lineId }}
        >
          <SelectInput optionText='name' initialValue={objectiveId} />
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
        <BooleanInput source='approved' />
      </SimpleForm>
    </Create>
  )
}

export default ActionCreate
