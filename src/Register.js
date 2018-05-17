import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';
import { Link } from "react-router-dom";
import Logo from './Logo';

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

const Register = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo} title="Registro" titleStyle={styles.title}  iconElementRight={space} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
        <div style={{ height: 20}}></div>
        <TextField
        hintText="Ej: johndoe79"
        floatingLabelText="Nombre de usuario"
        /><br />
        <TextField
        hintText="Ej: john@gmail.com"
        type="email"
        floatingLabelText="Email"
        /><br />
        <TextField        
        type="password"
        floatingLabelText="Contraseña"
        /><br />
        <TextField
        type="password"
        floatingLabelText="Repetir contraseña"
        />
        <div style={{ height: 150}}></div>
      
        <Link to="/register_success"><RaisedButton label="Crear cuenta" primary={true} style={styles.button} /></Link>
      
    </div>

    </MuiThemeProvider>

);

export default Register;