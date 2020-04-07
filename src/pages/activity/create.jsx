import React from 'react'
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
  FileField
} from 'react-admin'
import { useSelectedValues } from '../../provider/context'
import Transversality from './Transversality'

import SearchGoogle from '../../helpers/fields/inputSearchPlace'

const validateActivityCreation = values => {
  const errors = {}

  return errors
}

const ActivityCreate = props => {
  let [{ objectiveId, actionId }] = useSelectedValues()

  return (
    <Create title='Crear Actividad' {...props}>
      <SimpleForm validate={validateActivityCreation}>
        <TextInput source='name' label='Nombre' defaultValue='' className='TextInput' />
        <TextInput source='description' label='Descripción' defaultValue='' className='TextInput' />
        <ReferenceInput
          reference='actions'
          source='actionId'
          label='Acción'
          className='TextInput'
          perPage={500}
          filter={{ objectiveId }}
        >
          <SelectInput optionText='name' value={actionId} />
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
          perPage={500}
        >
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
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
          allowEmpty
          perPage={500}
        >
          <SelectArrayInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceArrayInput>
        <ArrayInput source='beneficiaries' label='Beneficiarios'>
          <SimpleFormIterator>
            <TextInput source='description' label='Descripción' />
            <NumberInput source='quantity' label='Cantidad' />
          </SimpleFormIterator>
        </ArrayInput>
        <SearchGoogle />
        <TextInput source='comments' label='Comentarios' defaultValue='' className='TextInput' />
        <Transversality />
        <ImageInput source='images' label='Imagenes' accept='image/*'>
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
    </Create>
  )
}
export default ActivityCreate
