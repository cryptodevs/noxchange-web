import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {cyan500, fullBlack, white, purpleA700, limeA200} from 'material-ui/styles/colors';
import Logo from './Logo';

const styles = {
  root:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 12
  },
  logo: {
    width: 50,
    height: 50
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

const Home = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo}  iconElementRight={<IconButton><MenuIcon /></IconButton>} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
      <RaisedButton label="Default" style={styles.button} fullWidth={true} />
      
      <RaisedButton label="Primary" primary={true} style={styles.button} fullWidth={true} />
      <RaisedButton label="Secondary" secondary={true} labelStyle={{ color: fullBlack}} style={styles.button} />
      <RaisedButton label="Disabled" disabled={true} style={styles.button} />
      <br />
      <br />
      <RaisedButton label="Full width" fullWidth={true} />
    </div>

    </MuiThemeProvider>

);

export default Home;