import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';
import serializeForm from 'form-serialize'
import Logo from './Logo';
import { getToken } from '../utils/api'
import { Redirect } from 'react-router-dom'
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  root:{
    display: 'flex',
    flexWrap: 'no-wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center'    
  },
  logo: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 16, 
    textAlign: 'center' 
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

const space = (
    <div style={{ height: 10, width: 50}}></div>
)


class Login extends React.Component {
  state = {
    error : {
      password: '',
      email: ''
    },
    redirect: false,
    token: '',
    loading: false
  }
  
  handleSubmit = async(e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    try{
      if(values.email && values.password){
        this.setState((state) => ({
          loading: true
        }))
        const response = await getToken(values)
        if (response.token) {
          this.setState((state) => ({
            error: {             
              email: '',
              password: ''
            },
            token: response.token,
            redirect: true
          }))          
        }

      }
      else {
        if(!values.email) {
          this.setState((state) => ({
            error: {             
              email: 'Este campo es requerido.'
            }
          }))
        }
        else {
          this.setState((state) => ({
            error: {
              password: 'Este campo es requerido.' 
            }
          }))
        }
      }
  
    }
    catch(err){
      this.setState((state) => ({
        error: {
          password: 'Error al ingresar al sistema. Revisa tus datos e ingresa nuevamente'
        },
        loading: false
      }))      

    }
  }

  render = () => {    
    if(this.state.redirect){
      return <Redirect to={{pathname: "/balance", state: {token: this.state.token}}} />;
    } 
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <AppBar iconElementLeft={Logo} title="Login" titleStyle={styles.title}  iconElementRight={space} style={{
        backgroundColor: 'white'
      }} />
      <div style={styles.root}>
          <div style={{ height: 60}}></div>
          <form onSubmit={this.handleSubmit} >
            <TextField
            hintText="Ej: john@mail.com"
            name="email"
            type="email"
            errorText={this.state.error.email}
            floatingLabelText="Email"
            /><br />
            <TextField
            type="password"
            name="password"
            errorText={this.state.error.password}
            floatingLabelText="Contraseña"
            /><br />
            <div style={{ height: 60}}></div>

            { !this.state.loading && 
              <div style={{display: 'flex', alignContent:'center', justifyItems:'center'}}>
                <RaisedButton label="Iniciar sesión" primary={true} style={styles.button} fullWidth={true} type="submit" />
              </div>
            }

            { this.state.loading && <CircularProgress style={{marginLeft: 100}} /> }
          </form>
      </div>
      
      </MuiThemeProvider>
    )  
  };
}


export default Login;