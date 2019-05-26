import React, { Component } from "react";
import Auth from "../Auth";
import Nav from "./Nav";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from '../paw_icon.png'

class Main extends Component {
  render() {
    console.log("test");
    return (
      <div id='background' className='responsive-img'>
          <div className="container-fluid">
            <Nav {...this.props}/>
           
            <h1>
                A Dog's Love
                <img src={icon} id='pawIcon'alt='icon'></img>
            </h1>
            <h3>
              <p className='flow-text'> One in five dogs never leave their shelter.
                <br/>
                Let's adopt better!
              </p> 
            </h3>
        {/* {!this.props.auth.isAuthenticated()&& */}
        {/* <div> */}

        {/* <div className='row justify-conten-end'>
            <button
                onClick={this.props.auth.login}
                className="btn btn-lg-primary"
                id="login"
            >
                Log In
            </button>
        </div> */}
        </div>
      </div>
    );
  }
}
export default Main;