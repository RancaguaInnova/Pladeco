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
import { Title } from 'react-admin';

import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertChartIcon from '@material-ui/icons/InsertChart';
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
  }
}))

export default function Dashboard(props) {
  const classes = useStyles()
  console.log(props)

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedHeightPaperInformation = clsx(classes.paper, classes.fixedHeightPaperInformation)

  return (
    <div className={classes.root}>
              <Title title="Dashboard" />

      <main className={classes.content}>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container spacing={10}>
            <Grid item xs={10} md={8} lg={6}>
              <Paper className={fixedHeightPaper}>
              <div className={classes.titles}>
                <InsertChartIcon /> Avances de Objetivos
              </div>
                <Gantt />
              </Paper>
            </Grid>
            <Grid item xs={10} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <div className={classes.titles}>
                <InsertChartIcon /> Avance Pladeco
              </div>
                <ChartPladeco />
              </Paper>
            </Grid>
          </Grid>
          </Container>
          <Container>
          <Grid container spacing={10}>
          <Grid item xs={10} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
              <div className={classes.titles}>
                <InsertChartIcon /> Acciones
              </div>
                <ActionList  {...props}/>
              </Paper>
            </Grid>
            <Grid item xs={10} md={8} lg={6}>
       
              <Paper className={fixedHeightPaperInformation}>    
               <div className={classes.titles}>
                <AssignmentIcon /> Activades recientes
              </div>
              <ActivityList {...props}></ActivityList>
              </Paper>
            </Grid>
            </Grid>
        </Container>
        
      </main>
    </div>
  )
}
