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
  BooleanInput
} from 'react-admin'
import inputSearchPlace from '../../helpers/fields/inputSearchPlace'
const ActivityCreate = props => {
  return (
    <Create title='Crear Actividad' {...props}>
      <SimpleForm>
        <TextInput source='name' label='Nombre' defaultValue='' />
        <TextInput source='description' label='Descripción' defaultValue='' />
        <ReferenceInput reference='actions' source='actionId' label='Acción'>
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
   
        <ReferenceInput reference='users' source='responsibleId' label='Responsable'>
          <SelectInput optionText='identifier' />
        </ReferenceInput>
        <ArrayInput source='executedFunds' label='Fondos ejecutados'>
          <SimpleFormIterator>
            <TextInput source='source' label='source' />
            <NumberInput source='amount' label='amount' />
          </SimpleFormIterator>
        </ArrayInput>

        <ReferenceArrayInput reference='users' source='coordinatedWith' label='Coordinado con'>
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
        <BooleanInput label='Aprobado' source='approved' defaultValue={false} />
      </SimpleForm>
    </Create>
  )
}
export default ActivityCreate
