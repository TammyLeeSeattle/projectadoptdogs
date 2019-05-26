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

          {/* <div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img src={this.props.picture} className="circle responsive-img"/> */}

                  {/*       
                <div class="card-content">
                  <p>Name:{this.props.name}.</p>
                  <p>Nick Name:{this.props.nickname}.</p>
                </div>

              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
               */}
                {/* </div>
              </div>
            </div>
          </div> */}
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Secret;
