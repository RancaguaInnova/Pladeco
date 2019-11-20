import React, { Fragment } from 'react'
import {
  Datagrid,
  DateField,
  EditButton,
  List,
  Responsive,
  TextField,
  SelectField,
  DateInput,
  DeleteButton,
  TextInput,
  Filter
} from 'react-admin'
import Divider from '@material-ui/core/Divider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const ActionFilter = props => (
  <Filter {...props}>
    <TextInput label='Buscar' source='search' alwaysOn />
    <DateInput label='Fecha Inicio' source='initialDate' />
    <DateInput label='Fecha Fin' source='endDate' />
  </Filter>
)
class TabbedDatagrid extends React.Component {
  tabs = [
    { id: 'not-started', name: 'No iniciado' },
    { id: 'in-progress', name: 'En progreso' },
    { id: 'finished', name: 'Finalizado' }
  ]

  state = { 'not-started': [], 'in-progress': [], finished: [] }

  static getDerivedStateFromProps(props, state) {
    if (props.ids !== state[props.filterValues.status]) {
      return { ...state, [props.filterValues.status]: props.ids }
    }
    return null
  }

  handleChange = (event, value) => {
    const { filterValues, setFilters } = this.props
    setFilters({ ...filterValues, status: value })
  }

  render() {
    const { classes, filterValues, ...props } = this.props

    return (
      <Fragment>
        <Tabs
          centered
          value={filterValues.status}
          indicatorColor='primary'
          onChange={this.handleChange}
        >
          {this.tabs.map(choice => {
            return <Tab key={choice.id} label={choice.name} value={choice.id} />
          })}
        </Tabs>
        <Divider />
        <Responsive
          medium={
            <div>
              {filterValues.status === 'not-started' && (
                <div>
                  <Datagrid {...props} ids={this.state['not-started']}>
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

                    <EditButton label='Editar' />
                    <DeleteButton label='Eliminar' />
                  </Datagrid>
                </div>
              )}
              {filterValues.status === 'in-progress' && (
                <Datagrid {...props} ids={this.state['in-progress']}>
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

                  <EditButton label='Editar' />
                  <DeleteButton label='Eliminar' />
                </Datagrid>
              )}
              {filterValues.status === 'finished' && (
                <Datagrid {...props} ids={this.state['finished']}>
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

                  <EditButton label='Editar' />
                  <DeleteButton label='Eliminar' />
                </Datagrid>
              )}
            </div>
          }
        />
      </Fragment>
    )
  }
}

const ActionList = ({ ...props }) => (
  <List
    basePath='/AccionValidation'
    resource='actions'
    hasCreate={true}
    hasEdit={true}
    hasList={true}
    hasShow={true}
    match={true}
    filterDefaultValues={{ status: 'not-started' }}
    sort={{ field: 'date', order: 'DESC' }}
    perPage={25}
    filters={<ActionFilter />}
    {...props}
  >
    <TabbedDatagrid />
  </List>
)

export default ActionList
