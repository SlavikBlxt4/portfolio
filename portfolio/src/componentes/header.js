import React from 'react';

const Header = () => {
    return(
      <div className="header">
        <div className="name"><h1>SLAVIK</h1></div>
        <div className="menu">
          <ul className="menu-list">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#works">MY WORKS</a></li>
            <li><a href="#contact" id="contact-link">CONTACT</a></li>
          </ul>
        </div>        
      </div>
    )
}

export default Header;