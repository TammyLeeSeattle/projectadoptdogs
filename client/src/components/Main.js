import React, { Component } from "react";
import Auth from "../Auth";
import Nav from "./Nav";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon from '../paw_icon.png'


class Main extends Component {
  state = {
    currentPage: 'Home'
  };

  render() { 
    return (
     <div>
            <h1>
                A Dog's Love
                <img src={icon} id='pawIcon'alt='icon'></img>
            </h1>
            <h3 className='flow-text'> One in Five dogs never leave the shelter
                <br/>
                Let's adopt better!
            </h3>
            </div>
    );
  }
}
export default Main;
