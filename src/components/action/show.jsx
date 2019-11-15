import React from 'react'
import {
  TextField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  Show,
  SimpleShowLayout,
  SelectField,
  ImageField,
  FileField
} from 'react-admin'
import ImageViewerField from '../../helpers/fields/ImageViewerField'
import PdfViewerField from '../../helpers/fields/PdfViewerField'

import DateField from '../../helpers/fields/DateField'
const ActionShow = props => (
  <Show {...props} Title='Acción'>
    <SimpleShowLayout>
      <TextField source='name' label='Nombre' />
      <ReferenceField reference='users' source='responsibleId' label='Responsable' linkType='show'>
        <TextField source='identifier' />
      </ReferenceField>
      <ReferenceArrayField
        label='Depende de:'
        reference='actions'
        source='dependsOnIds'
        linkType='show'
      >
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
      <ReferenceField reference='objectives' source='objectiveId' label='Objetivo' linkType='show'>
        <TextField source='name' />
      </ReferenceField>
  
      <ImageViewerField source='pictures' label='Imagenes'></ImageViewerField>
{/*       <PdfViewerField source='files' label='Imagenes'></PdfViewerField>
 */}
      <FileField source="files.src" title="files.title" />
    </SimpleShowLayout>

  </Show>
)
export default ActionShow
