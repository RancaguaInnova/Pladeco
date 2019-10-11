import React from 'react'
import { Show, TextField, SimpleShowLayout ,ReferenceField} from 'react-admin'

const ObjetiveShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' defaultValue='' />
      <TextField source='description' label='Descripción' defaultValue='' />
      <ReferenceField label='Linea' source='lineId' reference='lines'>
        <TextField source='name' />
      </ReferenceField>{' '}
    </SimpleShowLayout>
  </Show>
)
export default ObjetiveShow
