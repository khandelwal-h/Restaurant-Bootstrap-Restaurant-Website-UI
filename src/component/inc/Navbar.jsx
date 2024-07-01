import React from "react";
import {Link} from"react-router-dom";
import "./styles.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
    <div className="container">
      <Link className="navbar-brand" href="/">React Hooks Website</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
       aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        

        
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/about">About</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle"to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Our Services
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item"to="/service-one">Service1</Link></li>
              <li><Link className="dropdown-item"to="/service-one">Service2</Link></li>
              <li><Link className="dropdown-item"to="/service-one">Service3</Link></li>
             
             
             
            </ul>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link"to="/contact">Contact</Link>
          </li>

        </ul>
       
      </div>
    </div>
  </nav>
  )
}

export default Navbar;