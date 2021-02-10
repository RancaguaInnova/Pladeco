import React from 'react'
import Grid from '@material-ui/core/Grid'
import WorkplanSelector from '../../helpers/Selectors/workplan'
import AreaSelector from '../../helpers/Selectors/area'
import LinesList from './list'
import { useSelectedValues } from '../../provider/context'
import DeleteButtonWithConfirmation from '../../helpers/DeleteButton'
import {
  Datagrid,
  EditButton,
  FunctionField,
  List,
  ReferenceField,
  TextField,
  usePermissions,
  TextInput,
  Filter
} from 'react-admin'
import _get from 'lodash/get'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { A11yProps, TabPanel } from '../../helpers/TabPanel'

const LineFilter = props => (
  <Filter {...props}>
    <TextInput label='Buscar' source='name' alwaysOn />
  </Filter>
)

const LinesView = props => {
  let [{ areaId }] = useSelectedValues()
  const { permissions } = usePermissions()
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label=''>
          <Tab value='one' label='Vista Filtros' wrapped {...A11yProps('one')} />
          <Tab value='two' label='Ver todas las lineas' {...A11yProps('two')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index='one'>
        <Grid container spacing={3} style={{ marginTop: '2rem' }}>
          <WorkplanSelector />
          <AreaSelector />
          <Grid item xs={12}>
            {areaId ? <LinesList {...props} areaId={areaId} /> : null}
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index='two'>
        <List {...props} title='Lineas' filters={<LineFilter />}>
          <Datagrid>
            <TextField source='name' label='Nombre' defaultValue='' />
            <ReferenceField reference='areas' source='areaId' label='Area' link='show'>
              <TextField source='name' />
            </ReferenceField>
            <ReferenceField
              reference='users'
              source='responsibleId'
              label='Responsable'
              link='show'
            >
              <FunctionField render={record => `${record.firstName} ${record.lastName}`} />
            </ReferenceField>
            <EditButton label='Editar' />
            {_get(permissions, 'lines.delete', false) && (
              <DeleteButtonWithConfirmation label='Eliminar' />
            )}
          </Datagrid>
        </List>
      </TabPanel>
    </div>
  )
}

export default LinesView
