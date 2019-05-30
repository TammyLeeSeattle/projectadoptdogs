import React from "react";
import Auth from "auth0-js";
import Button from "@material-ui/core/Button";
import IconLabelButtons from "./ButtonwithIcon";
const Axios = require("axios");

function UserInfo(props) {
  console.log('this one',props);
  
  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <div className="input-field col s6">
            {props.name ? (
              <input
                placeholder={props.name}
                // onChange={props.onChange}
                id="first_name"
                name="firstName"
                value={props.firstName}
                type="text"
                className="validate"
              />
            ) : (
              <label htmlFor="first_name">First Name</label>
            )}
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              name="lastName"
              value={props.lastName}
              onChange={props.onChange}
              className="validate"
            />
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                name="email"
                value={props.email}
                onChange={props.onChange}
                className="validate"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <p>
            <label>
              <input type="checkbox" />
              <span>I agree</span>
            </label>
          </p>
          <IconLabelButtons onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
}
export default UserInfo;
