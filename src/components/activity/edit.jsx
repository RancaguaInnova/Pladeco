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
        <ArrayInput source='executedFunds' label='Fondos ejecutados'>
          <SimpleFormIterator>
            <TextInput source='source' label='source' />
            <NumberInput source='amount' label='amount' />
          </SimpleFormIterator>
        </ArrayInput>
        <ReferenceArrayInput reference='users' source='coordinatedWith' label='Coordinado con'>
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
        <SearchGoogle source='location' label='Localización' defaultValue='' />

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
        <ImageInput source='images' label='Imagenes' accept='image/*' multiple>
          <ImageField source='src' title='title' />
        </ImageInput>
        <FileInput source='documents' label='Documentos' accept='application/pdf' multiple>
          <FileField source='src' title='title' />
        </FileInput>
      </SimpleForm>
    </Edit>
  )
}
export default ActivityEdit
