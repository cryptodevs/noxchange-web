import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import { Link } from "react-router-dom";
import {GridList, GridTile} from 'material-ui/GridList';
import UpperMenu from './UpperMenu';
import Logo from './Logo';
import { styles, muiTheme } from './styles'


const PaymentMethods = ({ match }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
    <AppBar iconElementLeft={Logo} title="Formas de pago" titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
      backgroundColor: 'white'
    }} />
    <div style={styles.root}>
    <div style={{ height: 20}}></div>
    <GridList
      cellHeight={160}
      style={styles.gridList}>
        <Link to="/setupkhipu"><GridTile
          key={''}
          title={'Configurar'}>
          <img alt="" style={styles.tiles} src={require('../images/khipu.png')} />
        </GridTile></Link>
       
    </GridList>
    </div>

    </MuiThemeProvider>

);

export default PaymentMethods;