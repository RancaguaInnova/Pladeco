import React from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesSelector from '../../helpers/Selectors/line'
import ObjectivesList from './list'
import { A11yProps, TabPanel } from '../../helpers/TabPanel'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  ReferenceField,
  TextField,
  TextInput
} from 'react-admin'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'
import { usePermissions } from 'react-admin'
import _get from 'lodash/get'

const ObjectiveFilter = props => (
  <Filter {...props}>
    <TextInput label='Buscar' source='name' alwaysOn />
  </Filter>
)

const ObjectivesView = props => {
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
          <Tab value='two' label='Ver todos los objetivos' {...A11yProps('two')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index='one'>
        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
          <WorkplanSelector />
          <AreaSelector />
          <LinesSelector />
          <Grid item xs={12}>
            <ObjectivesList {...props} />
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index='two'>
        <List {...props} title='Objetivos' filters={<ObjectiveFilter />}>
          <Datagrid>
            <TextField source='name' label='Nombre' defaultValue='' />
            <ReferenceField label='Linea' source='lineId' reference='lines' link='show'>
              <TextField source='name' />
            </ReferenceField>
            <EditButton label='Editar' />
            {_get(permissions, 'objectives.delete', false) && (
              <DeleteButtonWithConfirmation label='Eliminar' />
            )}{' '}
          </Datagrid>
        </List>{' '}
      </TabPanel>
    </div>
  )
}

export default ObjectivesView
