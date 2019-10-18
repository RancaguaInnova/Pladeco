import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  SelectField
} from 'react-admin'
import DateField from '../../helpers/fields/DateField'
import { withStyles } from '@material-ui/core/styles';
const listStyles = {
  actions: {
      backgroundColor: 'red',
  },
  thead: {
    background:'linear-gradient(60deg, #26c6da, #BCD6DD)',
    color:'#fff'
  },
  table:{
    color:'#fff',
  }
    
};

export const ActionList =  withStyles(listStyles)(({ classes, ...props })  => (
  <List {...props} title='Acciones'>
    <Datagrid rowClick='edit' classes={classes}>
      <TextField source='name' label='Nombre' />
      <ReferenceField reference='users' source='responsibleId' label='Responsable'  linkType="show">
        <TextField source='identifier' />
      </ReferenceField>
      <ReferenceArrayField label='Depende de:' reference='actions' source='dependsOnIds'  linkType="show"> 
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ReferenceArrayField>
      <SelectField
        source='status'
        label='Estado'
        choices={[
          { id: 'not-started', name: 'No iniciado' },
          { id: 'in-progress', name: 'En progreso' },
          { id: 'finished', name: 'Finalizado' }
        ]}
      />
      <DateField source='initialDate' label='Fecha de inicio' />
      <DateField source='endDate' label='Fecha de termino' />
      <TextField source='weight' label='Peso' />
      <ReferenceField reference='objectives' source='objectiveId' label='Objetivo'  linkType="show">
        <TextField source='name' />
      </ReferenceField>
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
))

export default ActionList
