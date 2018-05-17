import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';
import { Link } from "react-router-dom";
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'


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

const menu = (
    <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Comprar" />
    <Link to="/sell" style={{ textDecoration: 'none'}}><MenuItem primaryText="Vender" disabled={true} /></Link>
    <MenuItem primaryText="Saldos" />
    <Link to="/methods" style={{ textDecoration: 'none'}}><MenuItem primaryText="Formas de pago" /></Link>
    <MenuItem primaryText="Salir" />
  </IconMenu>    
)

const Khipu = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={logo} title="Configurar Khipu" titleStyle={styles.title}  iconElementRight={menu} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
        <div style={{ height: 20}}></div>

        <TextField        
        floatingLabelText="Receiver ID:"
        /><br />
        <TextField
        floatingLabelText="Secret"
        /><br />
        <div style={{ height: 150}}></div>
      
        <Link to="/balance"><RaisedButton label="Guardar" primary={true} style={styles.button} /></Link>
      
    </div>

    </MuiThemeProvider>

);

export default Khipu;