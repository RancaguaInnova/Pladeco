import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
  TextField,
  SimpleShowLayout,
  ReferenceField,
  ChipField,
  SelectField,
  SingleFieldList,
  ReferenceArrayField,
  NumberField,
  BooleanField,
  ArrayField,
  Datagrid,
  Button
} from 'react-admin'
import IconContentAdd from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import PropTypes from 'prop-types'
import ImageViewerField from '../../helpers/fields/ImageViewerField'
import PdfFileField from '../../helpers/fields/PdfFileField'
const ActivityPreviewView = props => {
  let [value, setValue] = React.useState(0)

  let handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Fragment>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label='Información de la Actividad'>
          <Tab label='Información Básica' {...a11yProps(0)} />
          <Tab label='Responsables' {...a11yProps(1)} />
          <Tab label='Fondos' {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0} className='panelActivityView'>
        <SimpleShowLayout {...props}>
          <TextField source='name' label='Nombre' defaultValue='' />
          <TextField source='description' label='Descripción' defaultValue='' />
          <ReferenceField reference='actions' source='actionId' label='Acción'>
            <TextField source='name'></TextField>
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
          <TextField source='comments' label='Comentarios' defaultValue='' />
          <BooleanField label='Aprobado' source='approved' defaultValue={false} />
        </SimpleShowLayout>
      </TabPanel>
      <TabPanel value={value} index={1} className='panelActivityView'>
        <SimpleShowLayout {...props}>
          <ReferenceField reference='users' source='responsibleId' label='Responsable'>
            <TextField source='identifier' />
          </ReferenceField>
          <ReferenceArrayField reference='users' source='coordinatedWith' label='Coordinado con'>
            <SingleFieldList>
              <ChipField source='identifier' />
            </SingleFieldList>
          </ReferenceArrayField>
          <ImageViewerField source='images' label='Imagenes'></ImageViewerField>

          <ArrayField source='documents' label='Documentos'>
            <Datagrid>
              <PdfFileField source='src' label='Listado de documentos' />
            </Datagrid>
          </ArrayField>
        </SimpleShowLayout>
      </TabPanel>
      <TabPanel value={value} index={2} className='panelActivityView'>
        <SimpleShowLayout {...props}>
          <ArrayField source='executedFunds' label='Fondos ejecutados'>
            <Datagrid>
              <TextField source='source' label='source' />
              <NumberField source='amount' label='amount' />
            </Datagrid>
          </ArrayField>

          <ArrayField source='beneficiaries' label='Beneficiarios'>
            <Datagrid>
              <TextField source='description' label='Descripción' />
              <NumberField source='quantity' label='Cantidad' />
            </Datagrid>
          </ArrayField>
        </SimpleShowLayout>
      </TabPanel>
    </Fragment>
  )
}

const mapStateToProps = (state, props) => ({
  // Get the record by its id from the react-admin state.
  record: state.admin.resources[props.resource]
    ? state.admin.resources[props.resource].data[props.id]
    : null,
  version: state.admin.ui.viewVersion
})

const ActivityPreview = connect(mapStateToProps, {})(ActivityPreviewView)

class ActivityQuickPreviewButton extends Component {
  state = { showDialog: false }

  handleClick = () => {
    this.setState({ showDialog: true })
  }

  handleCloseClick = () => {
    this.setState({ showDialog: false })
  }

  render() {
    const { showDialog } = this.state
    const { id } = this.props

    return (
      <Fragment>
        <Button onClick={this.handleClick} label='Ver mas'>
          <IconContentAdd />
        </Button>
        <Dialog
          className='dialogActivityView'
          open={showDialog}
          onClose={this.handleCloseClick}
          aria-label='Información de la Actividad'
        >
          <DialogTitle>Información de la Actividad</DialogTitle>
          <DialogContent>
            <ActivityPreview id={id} basePath='/activities/show' resource='activities' />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}
export default connect()(ActivityQuickPreviewButton)
