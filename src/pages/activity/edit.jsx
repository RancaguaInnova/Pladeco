import React from 'react'
import {
  TextInput,
  SimpleForm,
  DateInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  Edit,
  ImageInput,
  ImageField,
  FileField,
  FileInput
} from 'react-admin'

import SearchGoogle from '../../helpers/fields/inputSearchPlace'
import _get from 'lodash/get'
import Transversality from './Transversality'

const ActivityEdit = props => {
  return (
    <Edit title='Editar Actividad' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' className='TextInput' />
        <TextInput source='description' label='Descripción' defaultValue='' className='TextInput' />
        <ReferenceInput
          reference='actions'
          source='actionId'
          label='Acción'
          className='SelectInput'
          perPage={500}
        >
          <SelectInput optionText='name' />
        </ReferenceInput>
        <SelectInput
          source='status'
          label='Estado'
          className='SelectInput'
          choices={[
            { id: 'not-started', name: 'No iniciado' },
            { id: 'in-progress', name: 'En progreso' },
            { id: 'finished', name: 'Finalizado' }
          ]}
        />
        <DateInput source='createAt' label='Fecha de creación' defaultValue='' />
        <TextInput source='files' label='Archivos' defaultValue='' className='TextInput' />
        <ReferenceInput
          reference='users'
          source='responsibleId'
          label='Responsable'
          className='SelectInput'
          perPage={500}
        >
          <SelectInput optionText={record => `${record.firstName} ${record.lastName}`} />
        </ReferenceInput>
        <ArrayInput source='executedFunds' label='Fondos ejecutados'>
          <SimpleFormIterator>
            <TextInput source='source' label='source' />
            <NumberInput source='amount' label='amount' />
          </SimpleFormIterator>
        </ArrayInput>
        <ReferenceArrayInput reference='users' source='coordinatedWith' label='Coordinado con'>
          <SelectArrayInput
            optionText={record => {
              let firstName = _get(record, 'firstName', 'Sin Nombre')
              let lastName = _get(record, 'lastName', 'Sin Apellido')
              return `${firstName} ${lastName}`
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
        <Transversality />
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
    </Edit>
  )
}
export default ActivityEdit
