import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth from './Auth';
import * as serviceWorker from './serviceWorker';

const auth = new Auth();
// auth.login();

let state = {};
window.setState = (changes) => {
    state = Object.assign({},state, changes);
    
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
}
/* eslint no-restricted-globals:0*/
let userName = auth.getProfile().given_name || 'User';
let userPic = auth.getProfile().picture;

let initialState = {
    name: userName,
    pic: userPic,
   location:location.pathname.replace(/^\/?|\/$/g,''),
   auth
}
 window.setState(initialState);
// ------------------------------------


serviceWorker.unregister();