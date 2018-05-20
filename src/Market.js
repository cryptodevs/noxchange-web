import React from 'react';
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

const Market = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo} title={"Comprar " + match.params.coin.toUpperCase()} titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
        <div style={{ height: 20}}></div>

      <List>
        <Subheader>Ordenar por: <Link to="#"> Precio </Link> | <Link to="#">Ventas</Link></Subheader>
        <Link style={styles.links} to={"/confirmbuy/" + match.params.coin + "/999"}>
            <ListItem
            leftAvatar={<Avatar src={require('./images/anonymous.png')} />}
            rightIconButton={rightIconMenu}
            primaryText="johndoe79"
            secondaryText={
                <p>
                <span style={{color: darkBlack}}>Precio: 59.01 CLP </span><br />
                Cantidad: 300 | Ventas: 19 &nbps;&nbps;&nbps;&nbps;
                </p>
            }
            secondaryTextLines={2}
            />
            <Divider inset={true} />
        </Link>

        <Link style={styles.links} to={"/confirmbuy/" + match.params.coin + "/999"}>
            <ListItem
            leftAvatar={<Avatar src={require('./images/anonymous.png')} />}
            rightIconButton={rightIconMenu}
            primaryText="jbatman"
            secondaryText={
                <p>
                <span style={{color: darkBlack}}>Precio: 59.01 CLP</span><br />
                Cantidad: 300 | Ventas: 19
                </p>
            }
            secondaryTextLines={2}
            />
            <Divider inset={true} />
        </Link>

        <Link style={styles.links} to={"/confirmbuy/" + match.params.coin + "/999"}>
            <ListItem
            leftAvatar={<Avatar src={require('./images/anonymous.png')} />}
            rightIconButton={rightIconMenu}
            primaryText="lolcatz"
            secondaryText={
                <p>
                <span style={{color: darkBlack}}>Precio: 59.01 CLP</span><br />
                Cantidad: 300 | Ventas: 19
                </p>
            }
            secondaryTextLines={2}
            />
            <Divider inset={true} />
        </Link>
        <Link style={styles.links} to={"/confirmbuy/" + match.params.coin + "/999"}>
            <ListItem
            leftAvatar={<Avatar src={require('./images/anonymous.png')} />}
            rightIconButton={rightIconMenu}
            primaryText="ittheclown"
            secondaryText={
                <p>
                <span style={{color: darkBlack}}>Precio: 59.01 CLP</span><br />
                Cantidad: 300 | Ventas: 19
                </p>
            }
            secondaryTextLines={2}
            />
        </Link>  
      </List>
      
    </div>

    </MuiThemeProvider>

);

export default Market;