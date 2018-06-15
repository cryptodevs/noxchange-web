import React, { Component } from 'react';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {fullBlack, purpleA700, limeA200, white, grey400, darkBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton'
import UpperMenu from './UpperMenu'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Logo from './Logo';
import { Link } from "react-router-dom";
import AsksActions from '../services/reducers/AsksRedux';

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
  },
  links: {
    textDecoration: 'none'
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

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
    );

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>Reply</MenuItem>
      <MenuItem>Forward</MenuItem>
      <MenuItem>Delete</MenuItem>
    </IconMenu>
  );

class Market extends Component {

  componentDidMount() {
    const { match } = this.props
    this.props.fetchAsks(match.params.coin)
  }

  asks() {
    const { match, markets } = this.props
    let market = markets[match.params.coin] || {asks: []}
    return market.asks.map(ask => (
      <Link key={ask.id} style={styles.links} to={"/confirmbuy/" + match.params.coin + "/" + ask.id}>
        <ListItem
          leftAvatar={<Avatar src={require('../images/anonymous.png')} />}
          rightIconButton={rightIconMenu}
          primaryText={ask.username}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Precio: {ask.price} CLP</span>
              <br />
              Cantidad: {ask.qty} | Ventas: 19
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
      </Link>
    ))
  }

  render() {
    const { match } = this.props
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
        <AppBar iconElementLeft={Logo} title={"Comprar " + match.params.coin.toUpperCase()} titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
          backgroundColor: 'white'
        }} />
        <div style={styles.root}>
            <div style={{ height: 20}}></div>
          <List>
            <Subheader>Ordenar por: <Link to="#"> Precio </Link> | <Link to="#">Ventas</Link></Subheader>
            {this.asks()}
          </List>
        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ markets }) => ({ markets })

const mapDispatchToProps = (dispatch) => ({
  fetchAsks: (market) => dispatch(AsksActions.fetchAsks(market)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Market)
