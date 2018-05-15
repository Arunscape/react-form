import React, { Component } from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import Paper from 'material-ui/Paper';
class Login extends Component {
  state = {
    usrname: '',
    passwd: ''
  }

  render() {
    const style = {
      margin: '0 auto'
    }
    return (

      <Paper zDepth={5} style={style}>

        <TextField
            floatingLabelText='Username'
          />
          <br/>
          <TextField
            type='password'
            floatingLabelText='Password'
          />

          <br/>
          <RaisedButton
            label='Login'
            primary={true}
          />
          <RaisedButton label='New account'/>

        </Paper>






    )
  }
}

export default Login;