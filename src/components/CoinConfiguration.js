import React from 'react';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200, grey400} from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';
import UpperMenu from './UpperMenu';
import Logo from './Logo';
import serialize from 'form-serialize'
import MyAsksActions from '../services/reducers/MyAsksRedux';

const styles = {
  root:{
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'center',
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
  toggle: {
      marginBottom: 16
  },
  block: {
    paddingTop: 15,
    width: 256
  },
  toggleLabel: {
    color: grey400
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


class CoinConfiguration extends React.Component {

  handleSubmit(e) {
    e.preventDefault()
    let ask = serialize(e.target, { hash: true, empty: true })
    ask['market'] = this.props.match.params.coin
    ask['market_price'] = ask['market_price'] !== ''
    ask['status'] = ask['status'] !== ''
    this.props.saveAsk(ask)
  }

  render() {
    let { match } = this.props
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
          <AppBar iconElementLeft={Logo} title={"Configurar " + match.params.coin.toUpperCase()} titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
            backgroundColor: 'white'
          }} />
          <div style={styles.root}>
            <div style={{ height: 20}}></div>
            <img style={styles.logo} alt="" src={require('../images/'+ match.params.coin + '.png')} />
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div style={styles.block}>
                <Toggle labelStyle={styles.toggleLabel}
                  label="Activo"
                  style={styles.toggle}
                  name="status"
                  value="true"
                />
                <br />
                <Toggle labelStyle={styles.toggleLabel}
                  label="Precio mercado"
                  name="market_price"
                  style={styles.toggle}
                  value="true"
                />
              </div>
              <br />
              <TextField
                name="qty"
                floatingLabelText="Cantidad a la venta"
              />
              <br />
              <TextField
                floatingLabelText="Precio de venta CLP"
                name="price"
              />
              <div style={{ height: 100}}></div>
              <RaisedButton label="Guardar" primary={true} style={styles.button} type="submit"/>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ userAsks }) => ({ userAsks })

const mapDispatchToProps = (dispatch) => ({
  saveAsk: (ask) => dispatch(MyAsksActions.saveAsk(ask)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinConfiguration)
