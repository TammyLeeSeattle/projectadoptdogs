import React, { Component } from "react";  
import UserInfo from "./../components/UserInfo";

class App extends Component {  
  render() {
    return (
      <div className="container">
        <h3>React Form</h3>
        <UserInfo />
      </div>
    );
  }
}

export default App; 