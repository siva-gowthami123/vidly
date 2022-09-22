import { reduceRight } from 'lodash';
import React from 'react';
import {Link, NavLink} from "react-router-dom";
const NavBar = ({user}) => {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
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
                
                <NavLink className="nav-item nav-link " to="/movies">
                  Movies 
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                  Customers    
                </NavLink>
                <NavLink className="nav-item nav-link" to="/rentals">
                  Rentals  
                </NavLink>
                <NavLink className="nav-item nav-link " to="/profile" style={{color: "red"}}>
                  {user.name}
                </NavLink>
                <NavLink className="nav-item nav-link" to="/logout" style={{color:"blue"}} >
                  Logout
                </NavLink>
              </React.Fragment> 
            )}
            
          </div>
        </div>
      </nav>
    );
};
 
export default NavBar;