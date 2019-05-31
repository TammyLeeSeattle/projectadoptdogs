import React, { Component } from "react";
import logo from "../logo.svg";
import Nav from "./Nav";
import Auth from "../Auth";
import UserInput from "./UserInput";
import Footer from "./Footer";

class Secret extends Component {

  render() {
  
    return (
      <div>
        <Nav {...this.props} />
        <div className="container">
          <div className="welcomeMsg" style={{ marginTop: 20 }}>
            <span className="flow-text">
              Welcome, {this.props.name}
            </span>
           {this.props.pic ?
            <img src={this.props.pic}  className="circle responsive-img" 
            : style={{backgroundImage:'none'}}
            />
            } 
            <p> Please take moment to fill out the following </p>
          </div>
          
          <br />
          <UserInput />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Secret;
