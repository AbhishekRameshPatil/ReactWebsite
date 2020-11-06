import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar =() => {
    return ( <>

    <div className="container-fluid nav_bg">
        <div className='row'>
    <div className="col-11 mx-auto mt-3">
      
       <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
  <NavLink exact  className="navbar-brand" to="/">SAFARI KID</NavLink>
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <NavLink  activeClassName='menu_active' exact className="nav-link mr-3" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' exact className="nav-link mr-3" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName='menu_active' exact className="nav-link mr-3" to="/contact">Contact</NavLink>
      </li>
     
    </ul>
  </div>
</nav>
</div>
        </div>
    </div>

        </>
    );
};

export default Navbar;