import React from 'react';
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';


const Portfolio = () => {
  return (
    <div className="App">
      <Header />
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
      <div className='footer'>
        <Footer />
      </div>
    </div>
    
    
  );
};

export default Portfolio;