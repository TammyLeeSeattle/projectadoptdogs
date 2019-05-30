import React from "react";
import Auth from "../Auth";
import { indigo } from "@material-ui/core/colors";
  // const styles = {
  //   navHome:{
  //     color:'white'
  //   },
  //   navOther: {
  //     color:'indigo'

  //   }
  // };

function Nav(props) {
  return (
    <div className="navbar-fixed">
      <nav className="transparent z-depth-0">
        <ul id="dropdown1" class="dropdown-content">
          <a href="#" data-target="mobile" class="sidenav-trigger">
            <i class="material-icons right">account_circle</i>
          </a>
          <li>
            <a href="#">one</a>
          </li>
          <li>
            <a
              href="#"
              onClick={props.auth.logout}
              className='indigo-text text-darken-4'
              id="logout"
            >
              Log Out
            </a>
          </li>
          <li class="divider" />
        </ul>

        <nav className="transparent z-depth-0">
          <div class="navbar-fixed ">
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
          
:             <a href="/" class="brand-logo">
              A Dog's Home{" "}
            </a>
            <ul class="right hide-on-med-and-down ">
              <li>
                <a href="/AboutUs" class='indigo-text text-darken-4'>About Us</a>
              </li>
              {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="medium material-icons right">account_circle</i></a></li> */}

              {!props.auth.isAuthenticated() ? (
                <li>
                  <a
                    href="#"
                    onClick={props.auth.login}
                    className='indigo-text text-darken-4'
                    id="login"
                  >
                    Log In
                  </a>
                </li>
              ) : (
                <li>
                  <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                    <i class="medium blue-text material-icons right">account_circle</i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </nav>
    </div>
  );
}
export default Nav;
