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

class Market extends Component {

  componentDidMount() {
    this.props.fetchMyBids()
  }

  bids() {
    const { bids } = this.props
    return bids.map(bid => {
      let primaryText = `${bid.qty} ${bid.market} status=${bid.status}`
      return(<Link key={bid.id} style={styles.links} to={"/confirmbuy/" +  + "/" + bid.id}>
        <ListItem
          leftAvatar={<img style={styles.logo} alt="" src={require('../images/'+ bid.market + '.png')} />}
          primaryText={primaryText}
          secondaryText={
            <p>
              <span style={{color: darkBlack}}>Precio: {bid.price} CLP</span>
              <br />
              Usuario: {bid.username}; {bid.created_at}
            </p>
          }
          secondaryTextLines={2}
        />
        <Divider inset={true} />
      </Link>
    )})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
        <AppBar iconElementLeft={Logo} title="Operaciones" titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
          backgroundColor: 'white'
        }} />
        <div style={styles.root}>
            <div style={{ height: 20}}></div>
          <List>
            <Subheader>Ordenar por: <Link to="#"> Precio </Link> | <Link to="#">Ventas</Link></Subheader>
            {this.bids()}
          </List>
        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ userBids }) => ({ bids: userBids.bids })

const mapDispatchToProps = (dispatch) => ({
  fetchMyBids: () => dispatch(MyBidsActions.fetchMyBids()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Market)

