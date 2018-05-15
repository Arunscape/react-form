import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import AppBar from './AppBar/AppBar'
import BottomNavigation from './BottomNavigation/BottomNavigation'
// import Login from './Login/Login'
import Login from './Login/Login'
import './App.css';

class App extends Component {

  render() {
    const style = {
      margin: '0 auto'
    }
    return (
      <div>
        <MuiThemeProvider>
          <AppBar/>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Login style = { style }/>
        </MuiThemeProvider>
        
        <MuiThemeProvider>
          <BottomNavigation />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;