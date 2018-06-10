import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';
import serializeForm from 'form-serialize'
import Logo from './Logo';
import { getToken } from '../utils/api'

const styles = {
  root:{
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 12,
    alignItems: 'center'
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
    const response = await getToken(values)
    console.log(response)
  }
  catch(err){
    console.error('ERROR', err)  
  }
}

const Login = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo} title="Login" titleStyle={styles.title}  iconElementRight={space} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
        <div style={{ height: 60}}></div>
        <form onSubmit={handleSubmit} >
          <TextField
          hintText="Ej: john@mail.com"
          name="email"
          type="email"
          floatingLabelText="Email"
          /><br />
          <TextField
          type="password"
          name="password"
          floatingLabelText="Contraseña"
          /><br />
          <div style={{ height: 60}}></div>
        
          <RaisedButton label="Iniciar sesión" primary={true} style={styles.button} type="submit" />
        </form>
    </div>

    </MuiThemeProvider>

);

export default Login;