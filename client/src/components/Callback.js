
import React, { Component } from 'react';
import giphy from '../giphy.gif';
import Auth from '../Auth';

class Callback extends Component {
  componentDidMount (){
            const auth = new Auth ();
            auth.handleAuthentication();
        }
  render() {
    const style = {
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        
      }

    return (
      <div style={style}>
        <img src={giphy} id='loading' alt="loading"/>
        <div>
                Loading...
        </div>
      </div>
    );
  }
}

export default Callback;