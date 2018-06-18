import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {fullBlack, purpleA700, limeA200} from 'material-ui/styles/colors';
import Logo from './Logo';
import serializeForm from 'form-serialize'
import { registerUser } from '../utils/api'
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

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    repeat_password: '',
    redirect: false,
    loading: false

  }

  handleSubmit = async(e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    try{
      if(values.username && values.email && values.password && values.password === values.repeat_password){
        this.setState((state) => ({
          loading: true
        }))        
        const response = await registerUser(values)
        console.log(response)
        this.setState((state) => ({
          redirect: true
        }))                
      }
      else {
        console.log(values.username)
        if(values.username===undefined){
          this.setState((state) => ({
            username: 'Este campo es requerido.'
          }))
        }
        if(values.email===undefined){
          this.setState((state) => ({
            email: 'Este campo es requerido.'
          }))
        }
        if(values.password===undefined){
          this.setState((state) => ({
            password: 'Este campo es requerido.'
          }))
        }
        if(values.repeat_password===undefined){
          this.setState((state) => ({
            repeat_password: 'Este campo es requerido.'
          }))
        }                                     
      }
  
    }
    catch(err){
      console.log(err)
      this.setState((state) => ({
        username: 'Error al registrar tu cuenta. Por favor intenta nuevamente',
        password: '',
        repeat_password: '',
        email: '',
        loading: false
      }))     
    }    
  }

  render = () => {
    if(this.state.redirect){
      return <Redirect to={{pathname: "/register_success"}} />;
    }     
    return  (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar iconElementLeft={Logo} title="Registro" titleStyle={styles.title}  iconElementRight={space} style={{
          backgroundColor: 'white'
        }} />
        <div style={styles.root}>
          <form onSubmit={this.handleSubmit} >
            <div style={{ height: 20}}></div>
            <TextField
            hintText="Ej: johndoe79"
            name="username"
            errorText={this.state.username}
            floatingLabelText="Nombre de usuario"
            /><br />
            <TextField
            hintText="Ej: john@gmail.com"
            name="email"
            errorText={this.state.email}
            type="email"
            floatingLabelText="Email"
            /><br />
            <TextField        
            type="password"
            name="password"
            errorText={this.state.password}
            floatingLabelText="Contraseña"
            /><br />
            <TextField
            name="repeat_password"
            type="password"
            errorText={this.state.repeat_password}
            floatingLabelText="Repetir contraseña"
            />
            <div style={{ height: 100}}></div>
          
            { !this.state.loading &&  <RaisedButton label="Crear cuenta" type="submit" primary={true} style={styles.button} fullWidth={true} /> }

            { this.state.loading && <CircularProgress style={{marginLeft: 100}} /> }
          </form>
        </div>
    
        </MuiThemeProvider>
    
    )
  }
}


export default Register;