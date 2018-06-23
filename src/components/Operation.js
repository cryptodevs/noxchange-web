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
import MyBidsActions from '../services/reducers/MyBidsRedux';
import * as R from 'ramda'
import RaisedButton from 'material-ui/RaisedButton';

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
      <MenuItem>Accept</MenuItem>
      <MenuItem>Reject</MenuItem>
    </IconMenu>
  );

class Operation extends Component {

  componentDidMount() {
    this.props.fetchMyBids()
  }

  render() {
    let { match } = this.props
    let bidId = match.params.id
    let bid = R.find(R.propEq('id', parseInt(bidId)))(this.props.bids) // cochino
    if (!bid) return null
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
        <AppBar iconElementLeft={Logo} title="Operaciones" titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
          backgroundColor: 'white'
        }} />
        <div style={styles.root}>
            <div style={{ height: 20}}></div>
            <img style={styles.logo} alt="" src={require('../images/'+ bid.market + '.png')} />
            <h2>Solicitud de compra</h2>
            <p>Estado: {bid.status}</p>
            <p>Usuario: {bid.username}</p>
            <p>Cantidad: {bid.qty} {bid.market}</p>
            <p>Precio: {bid.price}</p>
            <p>Total: {bid.price*bid.qty}</p>
            <p>Fecha: {bid.created_at}</p>
            <p>Escrow address: {bid.escrow_address}</p>
            <RaisedButton label="Aceptar" primary={true} style={styles.button} onClick={()=>this.props.acceptBid(bid.id)}/>
        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ userBids }) => ({ bids: userBids.bids })

const mapDispatchToProps = (dispatch) => ({
  fetchMyBids: () => dispatch(MyBidsActions.fetchMyBids()),
  acceptBid: (bidId) => dispatch(MyBidsActions.acceptBid(bidId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Operation)
