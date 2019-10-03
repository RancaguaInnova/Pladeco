import React from 'react'
import {
  Show,
  TextField,
  SimpleShowLayout,
  ReferenceField,
  ChipField,
  SelectField,
  DateField,
  SingleFieldList,
  ReferenceArrayField,
  NumberField,
  BooleanField,
  ArrayField,
  Datagrid
} from 'react-admin'

const ActivityShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='Descripción' defaultValue='' />
      <ReferenceField reference='actions' source='actionId' label='Acción'>
        <TextField source='name' />
      </ReferenceField>
      <SelectField
        source='status'
        label='Estado'
        choices={[
          { id: 'not-started', name: 'No iniciado' },
          { id: 'in-progress', name: 'En progreso' },
          { id: 'finished', name: 'Finalizado' }
        ]}
      />
      <DateField source='createAt' label='Fecha de creación' defaultValue='' />

   
      <ReferenceField reference='users' source='responsibleId' label='Responsable'>
        <TextField source='identifier' />
      </ReferenceField>
      <ArrayField source='executedFunds' label='Fondos ejecutados'>
        <Datagrid>
          <TextField source='source' label='source' />
          <NumberField source='amount' label='amount' />
        </Datagrid>
      </ArrayField>

      <ReferenceArrayField reference='users' source='coordinatedWith' label='Coordinado con'>
        <SingleFieldList>
          <ChipField source='identifier' />
        </SingleFieldList>
      </ReferenceArrayField>

      <ArrayField source='beneficiaries' label='Beneficiarios'>
        <Datagrid>
          <TextField source='description' label='Descripción' />
          <NumberField source='quantity' label='Cantidad' />
        </Datagrid>
      </ArrayField>
      <TextField source='location.name' label='Localización nombre' />
      <NumberField source='location.lat' label='Localización latitud' />
      <NumberField source='location.lng' label='Localización longitud' />

      <TextField source='comments' label='Comentarios' defaultValue='' />
      <ArrayField source='transversality' label='Transversalidad'>
        <Datagrid>
          <ReferenceField reference='areas' source='areaId' label='Area'>
            <TextField source='name' />
          </ReferenceField>
          <ReferenceField reference='lines' source='lineId' label='Linea'>
            <TextField source='name' />
          </ReferenceField>
          <ReferenceField reference='objectives' source='objectiveId' label='Objetivo'>
            <TextField source='name' />
          </ReferenceField>
          <ReferenceField reference='actions' source='actionId' label='Acción'>
            <TextField source='name' />
          </ReferenceField>
        </Datagrid>
      </ArrayField>
      <BooleanField label='Aprobado' source='approved' defaultValue={false} />
    </SimpleShowLayout>
  </Show>
)
export default ActivityShow
