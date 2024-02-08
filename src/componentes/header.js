import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
      <div className="header">
        <div className="name"><a href="/"><h1>XAVI</h1></a></div>
        <div className="menu">
          <ul className="menu-list">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/aboutme">ABOUT ME</Link></li>
            <li><Link to="/projects">MY WORKS</Link></li>
            <li><Link to="/contact" id="contact-link">CONTACT</Link></li>
          </ul>
        </div>        
      </div>
    )
}

export default Header;