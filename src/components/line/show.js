import React from 'react'
import { Show, TextField, SimpleShowLayout ,ReferenceField} from 'react-admin'

const LineShow = props => (
  <Show {...props} title="Linea">
    <SimpleShowLayout>
    <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='Descripción' defaultValue='' />
      <ReferenceField reference='areas' source='areaId' label='Area'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField reference='users' source='responsibleId' label='Responsable'>
        <TextField source='identifier' />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
)
export default LineShow
