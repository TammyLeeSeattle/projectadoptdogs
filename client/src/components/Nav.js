import React from "react";
import auth from "../Auth";
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
        <ul id="dropdown1" className="dropdown-content">
          <a href="#" data-target="mobile" className="sidenav-trigger">
            <i className="material-icons right">account_circle</i>
          </a>
          <li>
            <a href="#">one</a>
          </li>
          <li>
            {props.auth &&
            <a
              href="#"
              onClick={props.auth.logout}
              className='indigo-text text-darken-4'
              id="logout"
            >
              Log Out
            </a>
            }
          </li>
          <li className="divider" />
        </ul>

        <nav className="transparent z-depth-0">
          <div className="navbar-fixed ">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          
             <a href="/" className="brand-logo">
              A Dog's Home{" "}
            </a>
            <ul className="right hide-on-med-and-down ">
              <li>
                <a href="/about" 
                onClick={()=> props.hangledPageChange ('About')} className={'indigo-text text-darken-4 ' + (props.currentPage === 'About'? 'nav-link active': 'nav-link')}>About Us</a>
              </li>
              {/* <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="medium material-icons right">account_circle</i></a></li> */}

              {props.auth && !props.auth.isAuthenticated() ? (
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
                  <a className="dropdown-trigger" href="#!" data-target="dropdown1">
                    <i className="medium blue-text material-icons right">account_circle</i>
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
