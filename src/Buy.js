import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {fullBlack, purpleA700, limeA200, white} from 'material-ui/styles/colors';
import { Link } from "react-router-dom";
import IconButton from 'material-ui/IconButton'
import {GridList, GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import UpperMenu from './UpperMenu'
import Logo from './Logo';

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

const Buy = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo} title="Comprar" titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
    <div style={{ height: 20}}></div>
    <GridList
      cellHeight={160}
      style={styles.gridList}
    >
        <Link to="/market/chaucha">
            <GridTile
            key={''}
            title={'Chaucha'}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
            <img alt="" style={styles.tiles} src={require('./images/chaucha.png')} />
            </GridTile>
        </Link>
        <Link to="/market/luka">
            <GridTile
            key={''}
            title={'LuKa'}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
            <img alt="" style={styles.tiles} src={require('./images/luka.png')} />
            </GridTile>
        </Link>
        <Link to="/market/ethereum">
            <GridTile
            key={''}
            title={'Ethereum'}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            >
            <img alt="" style={styles.tiles} src={require('./images/ethereum.png')} />
            </GridTile>
        </Link>
    </GridList>
    </div>

    </MuiThemeProvider>

);

export default Buy;