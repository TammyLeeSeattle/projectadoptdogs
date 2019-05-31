/* AIM OF THIS FILE:

    - Set up the "user survey" quiz page that will EVENTUALLY render components conditionally
    - for MVP, only base components are created and all will be shown on this page

*/

// DEPENDENCIES
import React, { Component } from 'react';
import "../App.css";
import logo from "../logo.svg"
import Question from "../components/userSurveyComponent/Question"

class UserSurvey extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Quiz</h2>
          </div>
          <Question content="What is your favourite food?" />
        </div>
        );
    }
}
 
export default UserSurvey;