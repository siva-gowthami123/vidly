import React, { Component } from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginForm from './components/loginForm';
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from './components/navBar';

import Logout from "./components/logout";
import auth from './services/authService';
import RegisterForm from './components/registerForm';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/common/protectedRoute';
import './App.css';

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({user});
    
    
  }

  
  render() { 
    const {user} = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className = "container">
          <Switch>
            
            <Route path ="/register" component = {RegisterForm}></Route>
            <Route path ="/login" component = {LoginForm}></Route>
            <Route path ="/logout" component = {Logout}></Route>
            <ProtectedRoute path ="/movies/:id"component = {MovieForm} /> 
            <ProtectedRoute path ="/movies"component = {Movies} /> 
            <Route 
              path ="/movies" 
              render={props =><Movies {...props} user= {this.state.user} />}
            />
            <Route path ="/customers" component = {Customers}></Route>
            <Route path ="/rentals" component = {Rentals}></Route>
            <Route path ="/notFound" component = {NotFound}></Route>
            <Redirect from ="/" exact to ="/movies" />
            <Redirect to="/notFound" />


          </Switch>
        

        </main>


      </React.Fragment>
    );
  }
}
 
export default App;

