import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton ,ReferenceField} from 'react-admin'
export const AreaList = props => (
  <List {...props} title='Áreas'>
    <Datagrid rowClick='edit'>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='descripcion' defaultValue='' />
      <ReferenceField label="Pladeco" source="workplanId" reference="workplans">
                <TextField source="name" />
            </ReferenceField>
      <EditButton label='Editar' />
      <DeleteButton label='Eliminar' />
    </Datagrid>
  </List>
)

export default AreaList
