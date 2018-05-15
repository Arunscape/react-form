import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import AppBar from './AppBar/AppBar'
import BottomNavigation from './BottomNavigation/BottomNavigation'
// import Login from './Login/Login'
import LoginScreen from './Login/LoginScreen'
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar/>
        <LoginScreen/>
        <BottomNavigation/>
      </MuiThemeProvider>
    );
  }
}

export default App;