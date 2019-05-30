
import React, { Component } from 'react';
import UserInfo from "./UserInfo";
import API from '../utils/API'
import { Input } from '@material-ui/core';

class UserInput extends Component{
    state = {
      // info : [
      //   {firstName: ''},
      //   {lastName: ''},
      //   {email: ''}
      // ]
      firstName : '',
      lastName : '',
      email : ''
    }

    createUser = () => {
      API.postUser({
        // the key is what serves sees and the value is what is defined in the state
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        contactEmail : this.state.email
        
      }).then(res => {
          console.log(res,"api-res");
          // this.setState({res});
        })
        .catch(err => console.log(err))
    };

    handleInputChange = event => { 
        this.setState({
          [event.target.name] : event.target.value
        });
    };

    handleFormSubmit = event => {
        console.log('clicked?');
        event.preventDefault();
       this.createUser();
    };

    render(){
      console.log(this.state)
        return(
          <UserInfo 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onClick={this.handleFormSubmit}
            onChange={this.handleInputChange}
          />
        )
     }
 };
 export default UserInput;
