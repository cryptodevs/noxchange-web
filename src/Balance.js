import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {fullBlack, purpleA700, limeA200, white} from 'material-ui/styles/colors';
import { Link } from "react-router-dom";
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import {GridList, GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root:{
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'space-around',
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
  gridList: {
    width: 300,
    overflowY: 'auto',
  },
  tiles: {
      width: 100,
      height: 100
  },
  menu: {
      backgroundColor: purpleA700,
      color: white
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
    <MenuItem primaryText="Vender" disabled={true} />
    <MenuItem primaryText="Saldos" />
    <Link to="/methods" style={{ textDecoration: 'none'}}><MenuItem primaryText="Formas de pago" /></Link>
    <MenuItem primaryText="Salir" />
  </IconMenu>    
)

const Balance = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={logo} title="Balance" titleStyle={styles.title}  iconElementRight={menu} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
    <div style={{ height: 20}}></div>
    <GridList
      cellHeight={160}
      style={styles.gridList}
    >
        <GridTile
          key={''}
          title={'Chaucha'}
          subtitle={<span>Saldo: <b>{'200.10'}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img alt="" style={styles.tiles} src={require('./images/chaucha.png')} />
        </GridTile>    
        <GridTile
          key={''}
          title={'LuKa'}
          subtitle={<span>Saldo: <b>{'154.130'}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img alt="" style={styles.tiles} src={require('./images/luka.png')} />
        </GridTile>
        <GridTile
          key={''}
          title={'Ethereum'}
          subtitle={<span>Saldo: <b>{'0.320'}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img alt="" style={styles.tiles} src={require('./images/ethereum.png')} />
        </GridTile>        
    </GridList>
    </div>

    </MuiThemeProvider>

);

export default Balance;