import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesSelector from '../../helpers/Selectors/line'
import ObjectivesSelector from '../../helpers/Selectors/objective'
import ActionsList from './list'
import { useSelectedValues } from '../../provider/context'
import _get from 'lodash/get'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'
import { usePermissions } from 'react-admin'
import {
  Datagrid,
  EditButton,
  List,
  TextField,
  SelectField,
  TextInput,
  Filter,
  BooleanField,
  SelectInput
} from 'react-admin'
import DateField from '../../helpers/fields/DateField'
import { A11yProps, TabPanel } from '../../helpers/TabPanel'

const ActionFilter = props => (
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

export default function ActionsView(props) {
  const { permissions } = usePermissions()
  const [value, setValue] = React.useState('one')
  let [{ objectiveId }] = useSelectedValues()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label=''>
          <Tab value='one' label='Vista Filtros' wrapped {...A11yProps('one')} />
          <Tab value='two' label='Ver todas las acciones' {...A11yProps('two')} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index='one'>
        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
          <WorkplanSelector />
          <AreaSelector />
          <LinesSelector />
          <ObjectivesSelector />
          <Grid item xs={12}>
            {objectiveId ? <ActionsList {...props} objectiveId={objectiveId} /> : null}
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index='two'>
        <List
          {...props}
          basePath={'/actions'}
          resource='actions'
          hasCreate={true}
          hasEdit={true}
          hasList={true}
          hasShow={true}
          match={true}
          sort={{ field: 'name', order: 'ASC' }}
          perPage={50}
          filters={<ActionFilter />}
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
      </TabPanel>
    </div>
  )
}
