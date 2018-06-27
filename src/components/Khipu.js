import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import serializeForm from 'form-serialize'
import UpperMenu from './UpperMenu';
import Logo from './Logo';
import * as R from 'ramda';
import { styles, muiTheme } from './styles'


class Khipu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      receiverId: '',
      secret: '',
      error: {
        receiverId: null,
        secret: null,
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }



  componentDidMount = () => {
    let myState = {}
    if(!R.isNil(localStorage.receiverId))
      myState['receiverId'] = localStorage.receiverId
    if(!R.isNil(localStorage.secret))
      myState['secret'] = localStorage.secret

    this.setState({
      receiverId: myState.receiverId,
      secret: myState.secret
    })
    
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (!R.isNil(values.receiverId) && !R.isNil(values.secret)) {
      localStorage.setItem('receiverId', values.receiverId)
      localStorage.setItem('secret', values.secret)
      this.setState({
        receiverId: values.receiverId,
        secret: values.secret
      })
      return
    }

    let error = {
      receiverId: R.isNil(values.receiverId) ? 'Este campo es requerido.' : null,
      secret: R.isNil(values.secret) ? 'Este campo es requerido.' : null
    }
    this.setState({ error })

  }

  handleChange = (ev) => {
    let obj = {}
    obj[ev.target.name] = ev.target.value
    this.setState(obj)
  }

  render = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <AppBar iconElementLeft={Logo} title='Configurar Khipu' titleStyle={styles.title}  iconElementRight={UpperMenu} style={{
        backgroundColor: 'white'
      }} />
      <div style={styles.root}>
          <div style={{ height: 20}}></div>
          <form onSubmit={this.handleSubmit} >
            <TextField
            floatingLabelText='Receiver ID:'
            name='receiverId'
            errorText={this.state.error.receiverId}
            value={this.state.receiverId}
            onChange={this.handleChange}
            /><br />
            <TextField
            floatingLabelText='Secret'
            name='secret'
            errorText={this.state.error.secret}
            value={this.state.secret}
            onChange={this.handleChange}
            /><br />
            <div style={{ height: 60}}></div>
          
            <RaisedButton label="Guardar" primary={true} style={styles.button} fullWidth={true} type="submit" />
          </form>

      </div>
      </MuiThemeProvider>
  );
}
export default Khipu;