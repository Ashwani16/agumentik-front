import React from 'react';
import './Navbar.css';
import logo from "../assest/gol-logo 1.jpg"
import { Link } from 'react-router-dom';
const navbar = () => {

    let navbarLogo=logo;
  

  return (
    <>
     <div id="navbar">
        <div >
          <img id="logo"
            src={navbarLogo}
            height="40px" width="auto" alt="Calendly logo" className="sc-xcu1of-0 fAEWHY"/>
          <img id="imlogo" src="https://assets.calendly.com/packs/frontend/media/logo-square-cd364a3c33976d32792a.png" />
        </div>
        <div id="mid">
          <ul id="ul">
            <li><Link className="a" to="/admindashboard">Dashboard</Link></li>
            
            <li><Link className="a" to="/place">About Lakshadweep</Link></li>
    
    
            <li>
              <Link className="a" to="/about">About Us</Link>
    
            </li>
            
          </ul>
        </div>
        <div id="signup">
          <button id="bt">Login</button>
          
          <button id="bt">Sign Up</button>
    
          <i className="gg-format-justify" id="gg"></i>
    
    
    
        </div>
      </div>
    </>
  )
}

export default navbar;
