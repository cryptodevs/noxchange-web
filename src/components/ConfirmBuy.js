import React from 'react';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200, grey400} from 'material-ui/styles/colors';
import { Link, Redirect } from "react-router-dom";
import UpperMenu from './UpperMenu';
import Logo from './Logo';
import BidsActions from '../services/reducers/BidsRedux';
import * as R from 'ramda'


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

class ConfirmBuy extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      buyer_address: '', // TODO: may we want to put the user address in here? dangerous?
      qty: '',
      price: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    const { match } = this.props
    const askId = match.params.id
    let bid = R.pick(['buyer_address', 'qty', 'price'], this.state)
    bid['ask_id'] = askId
    this.props.saveBid(bid)
    this.setState({redirect: true})
  }

  handleChange(event, val) {
    event.preventDefault()
    this.setState({[event.target.name]: val})
  }

  render() {
    if (this.state.redirect)
      return <Redirect to='/buy'/>

    let { match } = this.props

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
          <AppBar iconElementLeft={Logo} title={"Comprar " + match.params.coin.toUpperCase()} titleStyle={styles.title} iconElementRight={UpperMenu} style={{
            backgroundColor: 'white'
          }} />
          <div style={styles.root}>
            <div style={{ height: 20}}></div>
            <img style={styles.logo} alt="" src={require('../images/'+ match.params.coin + '.png')} />
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField
                hintText="Ver billetera, dirección pública"
                floatingLabelText="Dirección criptomoneda destino"
                name="buyer_address"
                value={this.state.buyer_address}
                onChange={(event, val) => this.handleChange(event, val)}
              />
              <br />
              <TextField
                type="number"
                floatingLabelText="Cantidad"
                name="qty"
                value={this.state.qty}
                onChange={(event, val) => this.handleChange(event, val)}
              />
              <br />
              <TextField
                type="number"
                floatingLabelText="Precio de venta CLP"
                name="price"
                value={this.state.price}
                onChange={(event, val) => this.handleChange(event, val)}
              />
              <div style={{height: 100}}></div>
              <RaisedButton label="Solicitar Compra" primary={true} style={styles.button} type="submit"/>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = ({ userAsks }) => ({ asks: userAsks.asks })

const mapDispatchToProps = (dispatch) => ({
  saveBid: (bid) => dispatch(BidsActions.saveBid(bid)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmBuy)
