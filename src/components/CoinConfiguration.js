import React from 'react';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200, grey400} from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';
import * as R from 'ramda'
import { Redirect } from 'react-router-dom'
import UpperMenu from './UpperMenu';
import Logo from './Logo';
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

  constructor(props) {
    super(props)
    let { match } = props
    let userAsk = props.asks[match.params.coin] || {}
    this.state = {
      redirect: false,
      status: userAsk.status,
      market_price: userAsk.market_price,
      qty: userAsk.qty,
      price: userAsk.price,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    let ask = R.pick(['market_price', 'status', 'price', 'qty'], this.state)
    ask['market'] = this.props.match.params.coin
    this.props.saveAsk(ask)
    this.setState({redirect: true})
  }

  handleChange(event, val) {
    event.preventDefault()
    this.setState({[event.target.name]: val})
  }

  render() {
    if (this.state.redirect)
      return <Redirect to='/sell'/>

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
                  toggled={this.state.status}
                  onToggle={(event, isInputChecked) => this.handleChange(event, isInputChecked)}
                />
                <br />
                <Toggle labelStyle={styles.toggleLabel}
                  label="Precio mercado"
                  name="market_price"
                  style={styles.toggle}
                  value="true"
                  toggled={this.state.market_price}
                  onToggle={(event, isInputChecked) => this.handleChange(event, isInputChecked)}
                />
              </div>
              <br />
              <TextField
                name="qty"
                floatingLabelText="Cantidad a la venta"
                value={this.state.qty}
                onChange={(event, val) => this.handleChange(event, val)}
              />
              <br />
              <TextField
                floatingLabelText="Precio de venta CLP"
                name="price"
                value={this.state.price}
                onChange={(event, val) => this.handleChange(event, val)}
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

const mapStateToProps = ({ userAsks }) => ({ asks: userAsks.asks })

const mapDispatchToProps = (dispatch) => ({
  saveAsk: (ask) => dispatch(MyAsksActions.saveAsk(ask)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinConfiguration)
