import React from 'react';
import {Link} from 'react-router-dom';
const Nav=(props)=>{
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to='/'>
          <a className="navbar-brand" href="#">TEST</a>
        </Link>        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to='/contacts'>
              <a className="nav-item nav-link" href="#">Contact Details</a>
            </Link>
          </div>
        </div>
      </div>          
     </nav>
    )
}
export default Nav;