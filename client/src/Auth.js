
  /*eslint no-restricted-globals:0 */

import {AUTH_CONFIG} from './Auth_Config'
import auth0 from 'auth0-js';
import jwtDecode from 'jwt-decode';
var dotenv = require('dotenv');
dotenv.config();
const LOGIN_SUCCESS = '/profile';
const LOGIN_FAILURE = '/';
const logoutDomain = 'https://dev-67ou39ym.auth0.com/v2/logout';


export default class Auth {
 
  auth0 = new auth0.WebAuth({
    // domain: process.env.AUTH0_DOMAIN,
    // clientID: process.env.AUTH0_CLIENT_ID,
    
    domain:'dev-67ou39ym.auth0.com',
    clientID: 'ajhhOs9tIUxyIh7kchUZWN58Y9zItDlI',
    audience: 'https://dev-67ou39ym.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token', 
    scope: 'openid profile'
  });

constructor(){
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
      // this.getAccessToken = this.getAccessToken.bind(this);
  //     this.getIdToken = this.getIdToken.bind(this);
  //     this.renewSession = this.renewSession.bind(this);
   }

  login()  {
    this.auth0.authorize();
    console.log('here?')
  }
  
//  will redirect to login

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = JSON.stringify((authResult.expiresIn)* 1000 + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        location.hash = '';
        location.pathname = LOGIN_SUCCESS;
      }else if(err){
        location.pathname = LOGIN_FAILURE;
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  logout () {
    localStorage.removeItem('accesss_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // location = logoutDomain;
    this.auth0.logout({
    returnTo: location.origin
    });
    console.log('out'); 
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  getProfile(){
    if(localStorage.getItem('id_token')){
      return jwtDecode(localStorage.getItem('id_token'))
    } else {
      return {}
    }
  }
  // renewSession() {
  //   this.auth0.checkSession({}, (err, authResults) => {
  //      if (authResults && authResults.accessToken && authResults.idToken) {
  //        this.setSession(authResults);
  //      } else if (err) {
  //        this.logout();
  //        console.log(err);
  //        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
  //      }
  //   });
  // }
};
