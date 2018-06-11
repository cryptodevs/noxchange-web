import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {fullBlack, purpleA700, limeA200, white} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton'
import {GridList, GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import UpperMenu from './UpperMenu';
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

class Balance extends React.Component {
  render = () =>{
    console.log(this.props.location.state.token)
    return(
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <AppBar iconElementLeft={Logo} title="Balance" titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
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
            <img alt="" style={styles.tiles} src={require('../images/chaucha.png')} />
          </GridTile>    
          <GridTile
            key={''}
            title={'LuKa'}
            subtitle={<span>Saldo: <b>{'154.130'}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img alt="" style={styles.tiles} src={require('../images/luka.png')} />
          </GridTile>
          <GridTile
            key={''}
            title={'Ethereum'}
            subtitle={<span>Saldo: <b>{'0.320'}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img alt="" style={styles.tiles} src={require('../images/ethereum.png')} />
          </GridTile>        
      </GridList>
      </div>
  
      </MuiThemeProvider>
  
    )
  }
}



export default Balance;