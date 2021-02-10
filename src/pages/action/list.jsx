import React from 'react'
import { Datagrid, EditButton, List, TextField, SelectField, BooleanField } from 'react-admin'
import DateField from '../../helpers/fields/DateField'
import { useSelectedValues } from '../../provider/context'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'
import { usePermissions } from 'react-admin'
import _get from 'lodash/get'
const ActionList = ({ ...props }) => {
  let [{ objectiveId }] = useSelectedValues()
  const { permissions } = usePermissions()

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
      filter={{ objectiveId }}
      title='Acciones'
    >
      <Datagrid>
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
        {_get(permissions, 'actions.delete', false) && (
          <DeleteButtonWithConfirmation label='Eliminar' />
        )}
      </Datagrid>
    </List>
  )
}

export default ActionList
