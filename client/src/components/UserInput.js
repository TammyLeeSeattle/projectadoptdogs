
import React, { Component } from 'react';
import UserInfo from "./UserInfo";
import API from '../utils/API'

class UserInput extends Component{
    state = {
        firstName: '',
        lastName: '',
        email: '',
    }

    handleInputChange = event => {
        this.setState({
            firstName: event.target.value,
            lastName:event.target.value,
            email:event.target.value
        })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('clicked?')       
        API.postUser()
            .then(res => this.setState({
                firstName: res.firstName,
                lastName: res.lastName,
                email: res.email
            }))
    }
    render(){
        return(
        <div class="row">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img src="images/sample-1.jpg"/>
                  <span class="card-title">Card Title</span>
                </div>
                
                <div class="card-content">
                  <p>Your first Name:{this.state.firstName}</p>
                  <p>Your last Name:{this.state.lastName}</p>
                  <p>Your email :{this.state.email}</p>

                </div>
              </div>
            </div>
          </div>        
        )
    }
}