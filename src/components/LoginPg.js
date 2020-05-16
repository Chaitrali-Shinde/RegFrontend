 import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LoginPg.css';


class LoginPg extends React.Component {

  constructor(props){
    super();
    this.state={
      username: "",
      password: ""
    };
  }

  //when the form is submitted then checks valid or not
  handleSubmit = e =>{
    e.preventDefault();
    var data= {
      username: this.state.username,
      password: this.state.password
    }
    console.log({data});
    if(this.state.username.length>3 || this.state.password.length>3)
    {
      console.log('Valid data');
    }
    else{
      console.error('Invalid');
    }
  };


  render(){

    return (
      <div className="App">
      <div className= "form-container">
        <h1>Sign In</h1>
        <form onSubmit= {this.handleSubmit} method= "post">
        <div className= "name">
            <input
              type= "text"
              placeholder= "Enter your username"
              name= "username"
              onChange= {(event)=>{this.setState({username:event.target.value})}}/>          
          </div>
              <div className= "password">
              <input
                type= "password"
                placeholder= "Enter your password"
                name= "password"
                onChange= {(event)=>{this.setState({password:event.target.value})}}/>
            </div>
            <div className="Login">
            <button type= "submit">Login</button>
              <Link to= "/registrationPg">
              <small> Register</small>
            </Link>
            <Link to= "/ForgrotPassword">
              <small> Forgot password</small>
            </Link>
            </div>
        </form>
      </div>
      </div>
    )
  }
  
}

export default LoginPg;
