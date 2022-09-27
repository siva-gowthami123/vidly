import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Form from './common/form';
import Joi  from "joi-browser";
import auth from '../services/authService';
import { Link } from 'react-router-dom';


class LoginForm extends Form {
  state ={
    data:{username:"", password:""},
    errors: {},
    
  };

  schema ={
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    
  }

  doSubmit = async() => {
    try {
      const {data} = this.state;

       this.setState({bkd:true})
      await auth.login(data.username, data.password);


      const {state} = this.props.location;
      
      window.location = state ? state.from.pathname: "/";
      
    } catch (ex) {
      if(ex.response.data && ex.response.response === 400){
        const errors = {...this.state.errors};
        errors.username=ex.response.data;
        this.setState({errors});
      }
      
    }
    
  }
   
  render() {
    if(auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        
        <form onSubmit={this.handleSubmit}> 

          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
          <Link to ="/register">

          {/*< button  className = " btn btn-primary btn-lg float-right " style={{marginTop: "-4%"}} >
            Register
            </button >*/}
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  
              <button class="btn btn-primary" type="button" style={{marginTop: "-3%"}}>Register</button>
            </div>
          </Link> 
          
          
          
          
        </form>
        

      </div>
    );
  }
}
 
export default LoginForm;