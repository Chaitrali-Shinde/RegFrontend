import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LoginPg.css';


//check if the form is empty or not if empty then sends valid as false
const formValid= ({formErrors, ...rest})=>
{
  let valid= true;

  Object.values(formErrors).forEach(val=> {
    val.length> 0 && (valid= false);
  });

  Object.values(rest).forEach(val=> {
    val ==null && (valid= false);
  });
   
  return valid;
}

class LoginPg extends React.Component {

  constructor(props){
    super();
    this.state={
      Email: null,
      password: null,
      formErrors: {
        Email: "",
        password: ""
      }
    };
  }

  //when the form is submitted then checks valid or not
  handleSubmit = e =>{
    e.preventDefault();

    if(formValid(this.state))
    {
      console.log('Valid data');
    }
    else{
      console.error('Invalid');
    }
  };

  //accepts only valid inputs 
  handleChange = e=> {
    e.preventDefault();
    const {name, value}= e.target;
    let formErrors= this.state.formErrors;

    switch(name)
    {
      case "Email": 
        formErrors.Email= 
        value.length < 3 && value.length > 0 ? "Email address can't be so short" : "";
        break;
      
      case "password":
        formErrors.password= 
        value.length < 6 && value.length > 0 ? "password should contain minimum 6 letters": "";
        break;
        default:
          break;
    }

    this.setState({ formErrors, [name]: value}, ()=> console.log(this.state))
  };


  render(){

    const { formErrors}= this.state;
    return (
      <div className="App">
      <div className= "form-container">
        <h1>Sign In</h1>
        <form onSubmit= {this.handleSubmit} onValidate>
        <div className= "Email">
            <input
              type= "email"
              placeholder= "Enter your email"
              name= "Email"
              onValidate
              onChange= {this.handleChange}            
            />
          </div>
          {formErrors.Email.length>0 && (
  <span className= "errorMessage">{formErrors.Email}</span>
          )}
              <div className= "password">
              <input
                type= "password"
                placeholder= "Enter your password"
                name= "password"
                onValidate
                onChange= {this.handleChange}            
              />
            </div>
            {formErrors.password.length>5 && (
  <span className= "errorMessage">{formErrors.password}</span>
          )}
            <div className="Login">
            <button type= "submit">Login</button>
              <Link to= "/registrationPg">
              <small> Register</small>
            </Link>
            </div>
        </form>
      </div>
      </div>
    )
  }
  
}

export default LoginPg;
