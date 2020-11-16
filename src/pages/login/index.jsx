import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLogin } from 'react-admin'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Collapse from '@material-ui/core/Collapse'
import { notification } from 'antd'

function MyLoginPage(props) {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  const [open, setOpen] = React.useState(false)

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

  const login = useLogin()

  const submit = e => {
    e.preventDefault()

    if (username !== '' && password !== '') {
      const credentials = { username: username, password: password }
      login(credentials).catch(error => {
        console.log(error)
        if (error.code === 'auth/too-many-requests') {
          notification.error({
            message: 'Se ha producido un error',
            description:
              'El acceso a esta cuenta se ha deshabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Puede restaurarlo inmediatamente restableciendo su contraseña o puede intentarlo de nuevo más tarde.'
          })
        } else if(error.code ==="auth/user-not-found"){
          notification.error({
            message: 'Se ha producido un error',
            description:"No hay ningún registro de usuario correspondiente a este identificador. Es posible que el usuario se haya eliminado."
          })
        }
        
        else if(error.code ==="auth/wrong-password"){
          notification.error({
            message: 'Se ha producido un error',
            description:"La contraseña no es válida o el usuario no tiene una contraseña."
          })
        }
        
        
        else {
          notification.error({
            message: 'Se ha producido un error',
            description: error.message
          })
        }
      })
    } else {
      setOpen(true)
    }
  }

  const classes = useStyles()

  const handleChangeUsuario = event => {
    setOpen(false)
    setUsername(event.target.value)
  }
  const handleChangePassword = event => {
    setOpen(false)
    setPassword(event.target.value)
  }

  return (
    <form className={classes.form} noValidate onSubmit={submit}>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='Usuario'
        label='Usuario'
        name='Usuario'
        autoComplete='Usuario'
        autoFocus
        onChange={handleChangeUsuario.bind(this)}
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        name='password'
        label='Contraseña'
        type='password'
        id='password'
        autoComplete='Contraseña'
        onChange={handleChangePassword.bind(this)}
      />
      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='Recordar Contraseña'
      />
      <Collapse in={open}>
        <Alert
          variant='filled'
          severity='error'
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setOpen(false)
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          Debe ingresar el usuario y contraseña
        </Alert>
      </Collapse>

      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        Enviar
      </Button>
    </form>
  )
}

export default connect(undefined)(MyLoginPage)
