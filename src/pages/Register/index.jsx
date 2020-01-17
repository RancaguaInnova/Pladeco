import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Alert from "../Alert";
import { makeStyles } from "@material-ui/core/styles";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

const Firebase = firebase.initializeApp(firebaseConfig, "AUTH");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://smart.rancagua.cl/">
        Corporación de Desarrollo e Innovación de Rancagua
      </Link>
      {` ${new Date().getFullYear()}`}
      {"."}
    </Typography>
  );
}

export default function Registro(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      height: "100vh"
    },
    image: {
      //backgroundImage: "url(https://source.unsplash.com/random)",
      background: "#ccc",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  const classes = useStyles();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [repeatedPassword, setRepeteadPassword] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = event => {
    setRepeteadPassword(event.target.value);
  };

  const [alert, setAlert] = useState({ open: false, title: "", body: "" });

  const submit = async e => {
    e.preventDefault();

    // Validation
    if (password !== repeatedPassword) {
      setAlert({
        open: true,
        title: "Contraseñas no coinciden!",
        body: "Por favor verifique que las constraseñas coinsidan"
      });
      return;
    }
    if (password.length < 6) {
      setAlert({
        open: true,
        title: "Contraseña inválida!",
        body: "Por favor ingrese una constraseña de al menos 6 caracteres"
      });
      return;
    }
    if (!email || !password || !repeatedPassword) {
      setAlert({
        open: true,
        title: "Formulario inclompleto!",
        body: "Por favor rellene todos los campos"
      });
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setAlert({
        open: true,
        title: "Email inválido!",
        body: "Por favor verifique su email"
      });
      return;
    }

    try {
      const {
        user: { uid }
      } = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      Firebase.firestore()
        .collection("users")
        .doc(uid)
        .set({ email: { address: email } });

      setAlert({
        open: true,
        title: "Usuario creado!",
        body: `Su usuario ha sido creado exitosamente. Contacte a su administrador para que le asigne sus permisos.`
      });
    } catch (error) {
      console.log("Error creating user:", error);
      setAlert({
        open: true,
        title: "Error!",
        body: `Ocurrión un error al registrar el usuario: ${error.message}`
      });
      return;
    }
  };

  return (
    <MuiThemeProvider theme={props.theme}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Project Manager Rancagua
            </Typography>
            <form className={classes.form} noValidate onSubmit={submit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                type="email"
                onChange={handleEmailChange.bind(this)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="Contraseña"
                onChange={handlePasswordChange.bind(this)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Repetir Contraseña"
                type="password"
                id="password"
                autoComplete="Contraseña"
                onChange={handleRepeatPasswordChange.bind(this)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Enviar
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#/login" variant="body2">
                    {"Ya tienes cuenta? Ingresa"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
      <Alert handleClose={() => setAlert({ open: false })} {...alert} />
    </MuiThemeProvider>
  );
}
