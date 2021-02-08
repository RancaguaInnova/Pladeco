
import React, { Fragment } from 'react'
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  SelectField,
  DateInput,
  DeleteButton,
  TextInput,
  Filter,
  BooleanField
} from 'react-admin'


import DateField from '../../helpers/fields/DateField'



const ActionFilter = props => (
    <Filter {...props}>
      <TextInput label='Buscar' source='name' alwaysOn />
      <DateInput label='Fecha Inicio' source='initialDate' />
      <DateInput label='Fecha Fin' source='endDate' />
    </Filter>
  )

const ActionList = ({ ...props }) => {
    return (
      <List
        {...props}
        resource='actions'
        hasCreate={true}
        hasEdit={true}
        hasList={true}
        hasShow={true}
        match={true}
        sort={{ field: 'date', order: 'DESC' }}
        perPage={50}
         filters={<ActionFilter />}
        title='Acciones'
      >
  
        <Datagrid rowClick={'edit'}>
          <TextField source='name' label='Nombre' />
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
          <BooleanField source='approved' label='Aprobado' />
          <EditButton label='Editar' />
          <DeleteButton label='Eliminar' />
        </Datagrid>
      </List>
    )
  }
  export default ActionList