import ChartDayEvent from './chartDayEvent'
import ChartMonth from './chartMonth'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Gantt from './pladeco.gantt'
import ChartPladeco from './chartPladeco'
import ActivityList from './pladeco.list'
import ActionList from './acciones'
import { Title } from 'react-admin'

import AssignmentIcon from '@material-ui/icons/Assignment'
import InsertChartIcon from '@material-ui/icons/InsertChart'
// @material-ui/core
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Store from '@material-ui/icons/Store'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import AccessTime from '@material-ui/icons/AccessTime'
import Accessibility from '@material-ui/icons/Accessibility'
import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
import HourglassEmptyTwoToneIcon from '@material-ui/icons/HourglassEmptyTwoTone';
import DonutLargeTwoToneIcon from '@material-ui/icons/DonutLargeTwoTone';
import DoneAllTwoToneIcon from '@material-ui/icons/DoneAllTwoTone';
// core components
import GridItem from '../../helpers/Grid/GridItem.js'
import GridContainer from '../../helpers/Grid/GridContainer.js'
import Table from '../../helpers/Table/Table.js'
import Tasks from '../../helpers/Tasks/Tasks.js'
import CustomTabs from '../../helpers/CustomTabs/CustomTabs.js'
import Danger from '../../helpers/Typography/Danger.js'
import Card from '../../helpers/Card/Card.js'
import CardHeader from '../../helpers/Card/CardHeader.js'
import CardIcon from '../../helpers/Card/CardIcon.js'
import CardBody from '../../helpers/Card/CardBody.js'
import CardFooter from '../../helpers/Card/CardFooter.js'
import { bugs, website, server } from './general.js'
import TimelapseIcon from '@material-ui/icons/Timelapse';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import upperCase from 'upper-case'




const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 400
  },
  fixedHeightPaperInformation: {
    height: 350
  },
  texto:{
    fontSize:'40px',
    textTransform:"capitalize"

  },
  texto2:{
    fontSize:'30px',
    paddingTop:'10px',
    paddingBottom:'10px',
    textTransform:"capitalize"


  },
  texto3:{
    fontSize:'20px',
    textTransform:"capitalize"


  },
  stats:{
    textTransform:"upperCase"
  }
}))

export default function Dashboard(props) {
  const classes = useStyles()
  console.log(props)

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedHeightPaperInformation = clsx(classes.paper, classes.fixedHeightPaperInformation)

  return (
    <div className={classes.root}>
      <Title title='Dashboard' />

      <main className={classes.content}>
        <Container>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color='warning' stats icon>
                  <CardIcon color='warning'>
                    <div className={classes.texto}>
                    40%
                  </div>
                  </CardIcon>
              
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                     Pladeco completado
                
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color='success' stats icon>
                  <CardIcon color='success'>
                  <div className={classes.texto2}>
                  789/2300 
                  </div>
                  </CardIcon>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    Acciones Aprobadas
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color='danger' stats icon>
                  <CardIcon color='danger'>
                    <TimelapseIcon></TimelapseIcon>
                  <div className={classes.texto3}>300 días</div>
                  </CardIcon>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                     Para finalizar pladeco
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color='info' stats icon>
                  <CardIcon color='info'>
                    <RecordVoiceOverIcon />
                    <div className={classes.texto3}>129/2300 </div> 
                  </CardIcon>
                
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                 Actividades difundidas a la comunidad

                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                title='Actividades:'
                headerColor='info'
                tabs={[
                  {
                    tabName: 'Pendientes',
                    tabIcon: HourglassEmptyTwoToneIcon,
                    tabContent: (
                      <Tasks checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={bugs} />
                    )
                  },
                  {
                    tabName: 'Iniciada',
                    tabIcon: DonutLargeTwoToneIcon,
                    tabContent: <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />
                  },
                  {
                    tabName: 'Finalizadas',
                    tabIcon: DoneAllTwoToneIcon,
                    tabContent: (
                      <Tasks checkedIndexes={[1]} tasksIndexes={[0, 1, 2]} tasks={server} />
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color='warning'>
                  <h4 className={classes.cardTitleWhite}> <InsertChartIcon />Lineas</h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor='warning'
                    tableHead={['ID', 'Linea', 'Avance']}
                    tableData={[
                      ['1', 'Linea 1', '45%'],
                      ['2', 'Linea 2', '56%'],
                      ['3', 'Linea 3', '20%'],
                      ['4', 'Linea 4', '70%']
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color='primary'>
                  <h4 className={classes.cardTitleWhite}>
                    <InsertChartIcon /> Avance de objetivos
                  </h4>
                </CardHeader>
                <CardBody>
                  <ChartPladeco />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color='success'>
                  <h4 className={classes.cardTitleWhite}>
                    <InsertChartIcon /> Acciones
                  </h4>
                </CardHeader>
                <CardBody>
                  <ActionList {...props} />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <Card>
                <CardHeader color='danger'>
                  <h4 className={classes.cardTitleWhite}> <AssignmentIcon /> Activades Pendientes</h4>
                </CardHeader>
                <CardBody>
                <ActivityList {...props}></ActivityList>
                </CardBody>
              </Card>
            </GridItem>
            </GridContainer>
        </Container>

       
      </main>
    </div>
  )
}
