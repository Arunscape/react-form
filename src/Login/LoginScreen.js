import React from 'react';
import Login from './Login'


export default props => {
  const style = {
    display: 'inline-block',
    // position: 'center'
    'margin-left': '33%',
    'margin-top': '10%'
    // 'margin-right': '50%'
    // 'padding': '25%'
  };

  return (
    <div style={style}>

      <Login/>

  </div>
  )
}