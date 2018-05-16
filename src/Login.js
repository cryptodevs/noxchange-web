import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';
import { Link } from "react-router-dom";

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

const logo = (
  <div><Link to="/"><img style={styles.logo} alt="" src={require('./images/logo.png')} /></Link></div>
);

const space = (
    <div style={{ height: 10, width: 50}}></div>
)

const Login = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={logo} title="Login" titleStyle={styles.title}  iconElementRight={space} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
        <div style={{ height: 130}}></div>

        <TextField
        hintText="Ej: john@gmail.com"
        type="email"
        floatingLabelText="Email"
        /><br />
        <TextField
        type="password"
        floatingLabelText="Contraseña"
        /><br />
        <div style={{ height: 150}}></div>
      
        <Link to="/balance"><RaisedButton label="Iniciar sesión" primary={true} style={styles.button} /></Link>
      
    </div>

    </MuiThemeProvider>

);

export default Login;