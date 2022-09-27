import React from 'react';
import Joi from 'joi-browser';
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from '../services/authService';
import { Link } from 'react-router-dom'; 


class RegisterForm extends Form {
  state = {
    data: {username: "", password: "", name: ""},
    errors: {}   
  };
  
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .min(5)
      .label("Name")    
  };

  doSubmit = async() => {
    try{
      this.setState({bkd:true})
      const response = await userService.register(this.state.data);
      auth.loginWithJwt( response.headers["x-auth-token"]);
      
      window.location="/";

    }catch (ex) {
      if(ex.response && ex.response.status === 404){
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({errors});
      }
    }
    
  };
      
  render() { 
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')} 
          {this.renderInput('name', 'Name')}
          {this.renderButton('Submit')}
          <Link to ="/login">

          {/*< button  className = " btn btn-primary btn-lg float-right " style={{marginTop: "-4%"}} >
            Login
            </button >*/}
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  
              <button class="btn btn-primary" type="button" style={{marginTop: "-3%"}}>Login</button>
            </div>
          </Link> 
 
        </form>
       
      </div>      
    );
  }
}
 
export default RegisterForm;