import React from "react";
import Auth from "auth0-js";
import Button from "@material-ui/core/Button"
import IconLabelButtons from "./ButtonwithIcon"
const Axios = require("axios");

function saveUser () {

}

function UserInfo(props){
    return(

    <div>
        <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              {props.name ?
              <input placeholder={props.name} id="first_name" type="text" className="validate"></input>:
              <label for="first_name">First Name</label>}

            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate"></input>
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label for="email"> <i class="large material-icons prefix">email</i></label>
            </div>
          </div>
        </form>

        <IconLabelButtons />

      </div>
    </div>
    )
}
export default UserInfo;