import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';
import Logo from './Logo';
import serializeForm from 'form-serialize'
import { registerUser } from './utils/api'

const styles = {
  root:{
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 12
  },
  logo: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 16, 
    textAlign: 'center' 
  }
  
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: fullBlack,
    primary1Color: purpleA700,
    accent1Color: limeA200,
  },
  appBar: {
    height: 60,
    textColor: fullBlack
  },
});
const space = (
    <div style={{ height: 10, width: 50}}></div>
)

async function handleSubmit(e) {
  e.preventDefault()
  const values = serializeForm(e.target, { hash: true })
  try{
    if(values['password'] === values['repeat_password']){
      const response = await registerUser(values)
      console.log(response)
    }

  }
  catch(err){
    console.error('ERROR', err)  
  }
}

const Register = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo} title="Registro" titleStyle={styles.title}  iconElementRight={space} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
      <form onSubmit={handleSubmit} >
        <div style={{ height: 20}}></div>
        <TextField
        hintText="Ej: johndoe79"
        name="username"
        floatingLabelText="Nombre de usuario"
        /><br />
        <TextField
        hintText="Ej: john@gmail.com"
        name="email"
        type="email"
        floatingLabelText="Email"
        /><br />
        <TextField        
        type="password"
        name="password"
        floatingLabelText="Contraseña"
        /><br />
        <TextField
        name="repeat_password"
        type="password"
        floatingLabelText="Repetir contraseña"
        />
        <div style={{ height: 150}}></div>
      
        <RaisedButton label="Crear cuenta" type="submit" primary={true} style={styles.button} />
      </form>
    </div>

    </MuiThemeProvider>

);

export default Register;