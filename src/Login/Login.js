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
      padding: '5%'
    };
    const style2 = {
      height: '200%',
      width: '200%'
    }
    return (
      <div>
        <Paper
          style={style2}
          zDepth={5}
        >
          <div style={style}>
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
          </div>
          </Paper>




      </div>

    )
  }
}

export default Login;