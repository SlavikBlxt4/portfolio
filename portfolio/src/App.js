import React from 'react';
import './App.css';


const Portfolio = () => {
  return (
    <div>
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

      <div className="content">
        <h2>About me</h2>
        <p>Information.</p>
        <h2>Website design and development for your brand</h2>
        <p>Description of services offered.</p>
      </div>

      <div className="skills">
        <div className="skill">HTML</div>
        <div className="skill">Website design and development</div>
        <div className="skill">JavaScript</div>
        <div className="skill">Python</div>
        <div className="skill">CSS</div>
        <div className="skill">Java</div>
      </div>
      <script src='js/script.js'></script>
    </div>
  );
};

export default Portfolio;