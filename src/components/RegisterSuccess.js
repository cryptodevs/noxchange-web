import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';

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


const RegisterSuccess = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <div style={styles.root} >
                  
      <div style={styles.item}>
        <div style={{ height: 230}}></div>

        <img style={styles.mainLogo} alt="" src={require('../images/logo.png')} /></div>
      <div style={styles.item}>
        <p style={styles.paragraph}>Te enviamos un correo para que confirmes tu cuenta.</p>
      </div>
    </div>
  </MuiThemeProvider>

);

export default RegisterSuccess;