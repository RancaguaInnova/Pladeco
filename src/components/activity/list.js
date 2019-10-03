import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  NumberField,
  ReferenceField,
  SelectField,
  ReferenceArrayField,
  BooleanField,
  SingleFieldList
} from 'react-admin'
import DateField from '../../helpers/fields/DateField'

export const ActivityList = props => (
  <List {...props} title='Actividades'>
    <Datagrid rowClick='edit'>
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
    
      <BooleanField source='approved' label='Aprobado' defaultValue='' />
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default ActivityList
