import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Form from './common/form';
import Joi  from "joi-browser";
import auth from '../services/authService';
import { Link } from 'react-router-dom';

class LoginForm extends Form {
  state ={
    data:{username:"", password:""},
    errors: {}
  };

  schema ={
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }

  doSubmit = async() => {
    try {
      const {data} = this.state;
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
          
          
          
          
        </form>
        <Link to ="/register">

        < button  className = " btn btn-primary btn-lg float-right  " style={{margin: "10px"}} >
          Register
        </button >
        </Link> 

      </div>
    );
  }
}
 
export default LoginForm;