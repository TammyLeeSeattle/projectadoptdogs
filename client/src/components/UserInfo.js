import React from "react";
import Auth from "auth0-js";
import Button from "@material-ui/core/Button";
import IconLabelButtons from "./ButtonwithIcon";
const Axios = require("axios");

// function saveUser () {

// }

function UserInfo(props) {
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              {props.name ? (
                <input
                  placeholder={props.name}
                  onChange= {props.handleInputChange}
                  id="first_name"
                  firstName='firstName'
                  value={props.firstName}
                  type="text"
                  className="validate"
                />
              ) : (
                <label for="first_name">First Name</label>
              )}
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" 
              lastName = 'lastName'
              value= {props.lastName}
              onChange= {props.handleInputChange}
              className="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" 
              email='email'
              value={props.email}
              onChange={props.handleInputChange}
              className="validate" />
              <label for="email">Email</label>
            </div>
          </div>
          <p>
            <label>
              <input type="checkbox" />
              <span>I agree</span>
            </label>
          </p>
        </form>
        <IconLabelButtons onClick={props.handleFormSubmit}/>
      </div>
    </div>
  );
}
export default UserInfo;