import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200, grey400} from 'material-ui/styles/colors';
import { Link } from "react-router-dom";
import Toggle from 'material-ui/Toggle';
import UpperMenu from './UpperMenu';
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
  },
  toggle: {
      marginBottom: 16
  },
  block: {
    paddingTop: 15,
    width: 256
  },
  toggleLabel: {
    color: grey400
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

const CoinConfiguration = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo} title={"Configurar " + match.params.coin.toUpperCase()} titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
        <div style={{ height: 20}}></div>
        <img style={styles.logo} alt="" src={require('./images/'+ match.params.coin + '.png')} />
        
        <TextField
        hintText="Ver billetera, dirección pública"
        floatingLabelText="Dirección criptomoneda"
        /><br />
        <div style={styles.block}>
            <Toggle labelStyle={styles.toggleLabel}
            label="Activo"
            style={styles.toggle}
            /><br />
            <Toggle labelStyle={styles.toggleLabel}
            label="Precio mercado"
            style={styles.toggle}
            />
        </div>
        <br />
        <TextField
        type="number"
        floatingLabelText="Cantidad a la venta"
        />
        <br />
        <TextField
        type="number"
        floatingLabelText="Precio de venta CLP"
        />        
        <div style={{ height: 100}}></div>
      
        <Link to="/sell"><RaisedButton label="Guardar" primary={true} style={styles.button} /></Link>
      
    </div>

    </MuiThemeProvider>

);

export default CoinConfiguration;