import React, { Component } from 'react';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {fullBlack, purpleA700, limeA200, white} from 'material-ui/styles/colors';
import { Link } from "react-router-dom";
import IconButton from 'material-ui/IconButton'
import {GridList, GridTile} from 'material-ui/GridList';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import UpperMenu from './UpperMenu';
import Logo from './Logo';
import MyAsksActions from '../services/reducers/MyAsksRedux';

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

class Sell extends Component {

  componentDidMount() {
    this.props.fetchAsks()
  }

  asks() {
    const { asks } = this.props
    return Object.values(asks).map(ask => (
      <Link key={ask.id} to={'/coinconfiguration/' + ask.market}>
        <GridTile
          key={''}
          title={ask.market}
          subtitle={<span><b>{ask.status ? 'Activo' : 'Inactivo'}</b></span>}
        >
          <img alt="" style={styles.tiles} src={require('../images/' + ask.market + '.png')} />
        </GridTile>
      </Link>
    ))
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
        <AppBar iconElementLeft={Logo} title="Vender" titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
          backgroundColor: 'white'
        }} />
        <div style={styles.root}>
          <div style={{height: 20}}></div>
          <GridList
            cellHeight={160}
            style={styles.gridList}
          >
            {this.asks()}
          </GridList>
        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ userAsks }) => ({ asks: userAsks.asks })

const mapDispatchToProps = (dispatch) => ({
  fetchAsks: () => dispatch(MyAsksActions.fetchMyAsks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell)
