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

const ActivityEdit = props => {
  return (
    <Edit title='Editar Actividad' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='actions' source='actionId' label='Acción' linkType='show'>
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

        <TextInput source='files' label='Archivos' defaultValue='' />
        <ReferenceInput
          reference='users'
          source='responsibleId'
          label='Responsable'
          linkType='show'
        >
          <SelectInput optionText='identifier' />
        </ReferenceInput>
        <ArrayInput source='executedFunds' label='Fondos ejecutados' linkType='show'>
          <SimpleFormIterator>
            <TextInput source='source' label='source' />
            <NumberInput source='amount' label='amount' />
          </SimpleFormIterator>
        </ArrayInput>
        <ReferenceArrayInput
          reference='users'
          source='coordinatedWith'
          label='Coordinado con'
          linkType='show'
        >
          <SelectArrayInput optionText='identifier' />
        </ReferenceArrayInput>
        <ArrayInput source='beneficiaries' label='Beneficiarios'>
          <SimpleFormIterator>
            <TextInput source='description' label='Descripción' />
            <NumberInput source='quantity' label='Cantidad' />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source='location.name' label='Localización nombre' />
        <NumberInput source='location.lat' label='Localización latitud' />
        <NumberInput source='location.lng' label='Localización longitud' />
        <TextInput source='comments' label='Comentarios' defaultValue='' />
        <ArrayInput source='transversality' label='Transversalidad'>
          <SimpleFormIterator>
            <ReferenceInput reference='areas' source='areaId' label='Area' linkType='show'>
              <SelectInput optionText='name' />
            </ReferenceInput>
            <ReferenceInput reference='lines' source='lineId' label='Linea' linkType='show'>
              <SelectInput optionText='name' />
            </ReferenceInput>
            <ReferenceInput
              reference='objectives'
              source='objectiveId'
              label='Objetivo'
              linkType='show'
            >
              <SelectInput optionText='name' />
            </ReferenceInput>
            <ReferenceInput reference='actions' source='actionId' label='Acción' linkType='show'>
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
    </Edit>
  )
}
export default ActivityEdit
