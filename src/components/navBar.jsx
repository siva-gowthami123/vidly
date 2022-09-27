import { reduceRight } from 'lodash';
import React from 'react';

import {Link, NavLink} from "react-router-dom";
import notebook from "../../src/assets/image/notebook.jpg";
const NavBar = ({user}) => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <Link  className="navbar-brand" to="/" style={{marginLeft: 300}}>
        <img src = {notebook} width="40px" height="30px"/>
         NoteBook
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          
            
            {!user && (
              <React.Fragment>
                <NavLink className="nav-item nav-link" to="/login">
                   
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                    
                </NavLink>
              </React.Fragment> 
            )}
            {user && (
              <React.Fragment>
                
                <NavLink className="nav-item nav-link   " to="/movies" style={{marginLeft: 600}}>
                  Movies 
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                  Customers    
                </NavLink>
                <NavLink className="nav-item nav-link" to="/rentals" >
                  Rentals  
                </NavLink>
                <NavLink className="nav-item nav-link " to="/profile" style={{color: "red"}}>
                  
                 {/*<button class="dropbtn" style={{color: "blue"}}>{user.name}
                    <i class="fa fa-caret-down "></i>
                  </button>
                  <div class="Logout"></div>
                  <NavLink className="nav-item nav-link" to="/logout" style={{color: "pink"}} >
                   Logout  
                  </NavLink>*/} 
                  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {user.name} 
                  </button>
                  <div class="dropdown-menu">  
                   <a class="dropdown-item" href="#"></a>
                   <NavLink className="nav-item nav-link" to="/logout" style={{color: "pink"}} >
                     Logout  
                   </NavLink>
                  </div> 
                  
        
                </NavLink>
          
                
              </React.Fragment> 
            )}
            
          </div>
        </div>
      </nav>
    );
};
 
export default NavBar;