import React,{Fragment} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Snackbar,
    TextField,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

import firebase from "firebase";

const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh'
    },
    image: {
      // backgroundImage: 'url(https://source.unsplash.com/random)',
      background: '#ccc',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }))
export default () => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");

    const [toastOpen, setToastOpen] = React.useState(false);
    const [toastMessage, setToastMessage] = React.useState("");
    const classes = useStyles()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async () => {
        console.log("sending email to: ", email);
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            setOpen(false);
            setToastOpen(true);
            setToastMessage("Se ha enviado un correo donde encontrara instrucciones para recuperar su contraseña.");
        } catch (error) {
            setToastOpen(true);
            setToastMessage(error.message);
        }
    };

    const handleOnChange = (event) => {
        const email = event.target.value;
        setEmail(email);
    };

    const handleToastClose = () => {
        setToastOpen(false);
        setToastOpen(false);
    };

    return (
        <Fragment>
            <Button    type='button'
                  
                  variant='contained'
                  color='secondary'
                  className={classes.submit} onClick={handleClickOpen}>
                Olvido su contraseña?
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Recuperar contraseña!</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Para recuperar su contraseña debe ingresar su correo.
                    </DialogContentText>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        variant="outlined"
                        style={{width: '100%'}}
                        onChange={handleOnChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleSubmit} color="primary" autoFocus>
                        Enviar contraseña a su correo
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar
                open={toastOpen}
                onClose={handleToastClose}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                message={toastMessage}
            />
        </Fragment>
    );
}