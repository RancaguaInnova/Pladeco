import Container from "@material-ui/core/Container"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ChartPladeco from "./chartPladeco"
import ActivityList from "./pladeco.list"
import ActionList from "./acciones"
import { Title } from "react-admin"
import Icofont from "react-icofont"
import AssignmentIcon from "@material-ui/icons/Assignment"
import InsertChartIcon from "@material-ui/icons/InsertChart"
import DonutLargeTwoToneIcon from "@material-ui/icons/DonutLargeTwoTone"
import DoneAllTwoToneIcon from "@material-ui/icons/DoneAllTwoTone"
// core components
import GridItem from "../../helpers/Grid/GridItem"
import GridContainer from "../../helpers/Grid/GridContainer"
import Table from "../../helpers/Table/Table"
import Tasks from "../../helpers/Tasks/Tasks"
import CustomTabs from "../../helpers/CustomTabs/CustomTabs"
import Card from "../../helpers/Card/Card"
import CardHeader from "../../helpers/Card/CardHeader"
import CardIcon from "../../helpers/Card/CardIcon"
import CardBody from "../../helpers/Card/CardBody"
import CardFooter from "../../helpers/Card/CardFooter"
import { bugs, website, server } from "./general"
import CountUp from "react-countup"
import Grafico1 from "./grafico1"
import Grafico2 from "./grafico2"
import Grafico3 from "./grafico3"
import Grafico4 from "./grafico4"
import Grafico5 from "./grafico5"
import Grafico6 from "./grafico6"
import Grafico7 from "./grafico7"
import Grafico8 from "./grafico8"

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 400,
  },
  fixedHeightPaperInformation: {
    height: 350,
  },
  texto: {
    fontSize: "40px",
    textTransform: "capitalize",
  },
  texto2: {
    fontSize: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    textTransform: "capitalize",
  },
  texto3: {
    fontSize: "20px",
    textTransform: "capitalize",
  },
  stats: {
    textTransform: "upperCase",
  },
}))

export default function Dashboard(props) {
  const classes = useStyles()

  const iconChartBar = () => {
    return (
      <div>
        <Icofont icon="icofont-chart-bar-graph" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }
  const iconChartPie = () => {
    return (
      <div>
        <Icofont icon="icofont-chart-pie" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }
  const iconChartFlow = () => {
    return (
      <div>
        <Icofont icon="icofont-chart-flow" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }
  const iconChartFlow2 = () => {
    return (
      <div>
        <Icofont icon="  icofont-chart-flow-2" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }

  const iconChartLine = () => {
    return (
      <div>
        <Icofont icon="  icofont-chart-line-alt" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }
  const iconChartHistogram = () => {
    return (
      <div>
        <Icofont icon="icofont-chart-histogram" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }
  const iconChartCalendar = () => {
    return (
      <div>
        <Icofont icon="  icofont-calendar" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }
  const iconChartLine2 = () => {
    return (
      <div>
        <Icofont icon=" icofont-chart-line" className="iconWhite" spin="false"></Icofont>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Title title="Gestión Pladeco" />

      <main className={classes.content}>
        <Container>
          <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="warning" stats icon>
                  <CardIcon color="warning">
                    <Icofont icon="icofont-list" className="iconWhite" spin="false"></Icofont>

                    <div className={classes.texto}>
                      {" "}
                      <CountUp start={1} end={47} duration={5} separator=" " suffix=" %"></CountUp>
                    </div>
                  </CardIcon>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>Pladeco completado</div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="success" stats icon>
                  <CardIcon color="success">
                    <Icofont icon="icofont-law-document " className="iconWhite"></Icofont>
                    <div className={classes.texto}>
                      <CountUp start={1} end={58} duration={5} separator=" " suffix=" %"></CountUp>
                    </div>
                  </CardIcon>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>Acciones Aprobadas</div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="danger" stats icon>
                  <CardIcon color="danger">
                    <Icofont icon="icofont-clock-time" className="iconWhite"></Icofont>
                    <div className={classes.texto}>
                      {" "}
                      <CountUp
                        start={800}
                        end={345}
                        duration={5}
                        separator=" "
                        suffix=" días"
                      ></CountUp>{" "}
                    </div>
                  </CardIcon>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>Para finalizar pladeco</div>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <Card>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <Icofont icon="icofont-megaphone-alt" className="iconWhite"></Icofont>
                    <div className={classes.texto}>
                      <CountUp start={1} end={67} duration={5} separator=" " suffix=" %"></CountUp>
                    </div>
                  </CardIcon>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>Actividades difundidas a la comunidad</div>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CustomTabs
                title="Graficos:"
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Grafico 1",
                    tabIcon: iconChartBar,
                    tabContent: <Grafico1 />,
                  },
                  {
                    tabName: "Grafico 2",
                    tabIcon: iconChartPie,
                    tabContent: <Grafico2 />,
                  },
                  {
                    tabName: "Grafico 3",
                    tabIcon: iconChartFlow2,
                    tabContent: <Grafico3 />,
                  },
                  {
                    tabName: "Grafico 4",
                    tabIcon: iconChartHistogram,
                    tabContent: <Grafico4 />,
                  },
                  {
                    tabName: "Grafico 5",
                    tabIcon: iconChartFlow,
                    tabContent: <Grafico5 />,
                  },
                  {
                    tabName: "Grafico 6",
                    tabIcon: iconChartCalendar,
                    tabContent: <Grafico6 />,
                  },
                  {
                    tabName: "Grafico 7",
                    tabIcon: iconChartLine,
                    tabContent: <Grafico7 />,
                  },
                  {
                    tabName: "Grafico 8",
                    tabIcon: iconChartLine2,
                    tabContent: <Grafico8 />,
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomTabs
                title="Actividades:"
                headerColor="info"
                tabs={[
                  {
                    tabName: "Pendientes",
                    tabIcon: InsertChartIcon,
                    tabContent: (
                      <Tasks checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={bugs} />
                    ),
                  },
                  {
                    tabName: "Iniciada",
                    tabIcon: DonutLargeTwoToneIcon,
                    tabContent: (
                      <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />
                    ),
                  },
                  {
                    tabName: "Finalizadas",
                    tabIcon: DoneAllTwoToneIcon,
                    tabContent: (
                      <Tasks checkedIndexes={[1]} tasksIndexes={[0, 1, 2]} tasks={server} />
                    ),
                  },
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="warning">
                  <h4 className={classes.cardTitleWhite}>
                    {" "}
                    <InsertChartIcon />
                    Lineas
                  </h4>
                </CardHeader>
                <CardBody>
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["ID", "Linea", "Avance"]}
                    tableData={[
                      ["1", "Linea 1", "45%"],
                      ["2", "Linea 2", "56%"],
                      ["3", "Linea 3", "20%"],
                      ["4", "Linea 4", "70%"],
                    ]}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>
                    <InsertChartIcon /> Avance de objetivos
                  </h4>
                </CardHeader>
                <CardBody>
                  <ChartPladeco />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="success">
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
                <CardHeader color="danger">
                  <h4 className={classes.cardTitleWhite}>
                    {" "}
                    <AssignmentIcon /> Activades Pendientes
                  </h4>
                </CardHeader>
                <CardBody>
                  <ActivityList {...props} />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </Container>
      </main>
    </div>
  )
}
