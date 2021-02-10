import React from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesSelector from '../../helpers/Selectors/line'
import ObjectivesSelector from '../../helpers/Selectors/objective'
import ActionsSelector from '../../helpers/Selectors/action'
import ActivitiesList from './list'
import { useSelectedValues } from '../../provider/context'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { A11yProps, TabPanel } from '../../helpers/TabPanel'
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  ReferenceField,
  SelectField,
  SelectInput,
  TextField,
  TextInput,
  usePermissions
} from 'react-admin'
import DateField from '../../helpers/fields/DateField'
import _get from 'lodash/get'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'

const ActivityFilter = props => (
  <Filter {...props}>
    <TextInput label='Buscar' source='name' alwaysOn />
    <SelectInput
      alwaysOn
      source='status'
      label='Estado'
      choices={[
        { id: 'not-started', name: 'No iniciado' },
        { id: 'in-progress', name: 'En progreso' },
        { id: 'finished', name: 'Finalizado' }
      ]}
    />
  </Filter>
)

const ActivitiesView = props => {
  let [{ actionId, workplanId, lineId, objectiveId }] = useSelectedValues()
  const [value, setValue] = React.useState('one')
  const { permissions } = usePermissions()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label=''>
          <Tab value='one' label='Vista Filtros' wrapped {...A11yProps('one')} />
          <Tab value='two' label='Ver todas las actividades' {...A11yProps('two')} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index='one'>
        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
          <WorkplanSelector {...props} />
          <AreaSelector {...props} />
          <LinesSelector {...props} />
          <ObjectivesSelector {...props} />
          <ActionsSelector {...props} />
          <Grid item xs={12}>
            {workplanId && lineId && actionId && objectiveId ? <ActivitiesList {...props} /> : null}
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index='two'>
        <List {...props} title='Actividades' filters={<ActivityFilter />}>
          <Datagrid>
            <TextField source='name' label='Nombre' defaultValue='' />
            <TextField source='description' label='Descripción' defaultValue='' />
            <ReferenceField reference='actions' source='actionId' label='Acción' link='show'>
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
            <EditButton label='Editar' />
            {_get(permissions, 'activities.delete', false) && (
              <DeleteButtonWithConfirmation label='Eliminar' />
            )}
          </Datagrid>
        </List>
      </TabPanel>
    </div>
  )
}

export default ActivitiesView
