import React, { Component } from "react";
import logo from "../logo.svg";
import Nav from "./Nav";
import Auth from "../Auth";
import UserInfo from "./UserInfo";
import Footer from "./Footer";

class Secret extends Component {
  render() {
    console.log("getting here?");
    return (
      <div>
        <Nav {...this.props} />
        <div className="container">
          <div className="welcomeMsg" style={{ marginTop: 20 }}>
            <span className="flow-text">
              Welcome, {this.props.name}
              <img src={this.props.pic} className="circle responsive-img" />
            </span>
          </div>
          <p> Please take moment to fill out the following </p>
          <br />
          <UserInfo {...this.props}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Secret;
