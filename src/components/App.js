import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
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
  item:{    
    paddingLeft: 15*4,
    paddingRight: 15*4,
  },
  button: {
    margin: 12
  },
  logo: {
    width: 50,
    height: 50
  },
  mainLogo: {
    width: 80,
    height: 80
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 'small'
  }
  
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: fullBlack,
    primary1Color: purpleA700,
    accent1Color: limeA200,
  },
  appBar: {
    height: 50,
    textColor: fullBlack
  },
});


const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div style={styles.root} >
                  
      <div style={styles.item}>
        <div style={{ height: 50}}></div>

        <img style={styles.mainLogo} alt="" src={require('../images/logo.png')} /></div>
      <div style={styles.item}>
        <p style={styles.paragraph}>Una nueva forma de comprar y vender criptomonedas en Chile.</p>
      </div>
      <div style={styles.item}>
        <div style={{ height: 50}}></div>
        <RaisedButton label="Quiero comprar" primary={true} style={styles.button}  />
      </div>
      <div style={styles.item}>
      <RaisedButton label="Quiero vender" secondary={true} labelStyle={{ color: fullBlack}} style={styles.button} />
      </div>
      <div style={styles.item}>
        <div style={{ height: 20}}></div>
        <Link to="/login">Ingresar ahora</Link>
      </div>
      <div style={styles.item}>
        <div style={{ height: 20}}></div>
        <p style={styles.paragraph}>¿No tienes cuenta?</p>
      </div>
      <div style={styles.item}>
      <Link to="/register">Regístrate</Link>
      </div>      
    </div>
  </MuiThemeProvider>

);

export default Main;