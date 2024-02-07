import React from 'react';
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Start from './paginas/Start';
import AboutMe from './paginas/AboutMe';
import Contact from './paginas/Contact';
import Main from './paginas/Main';
import ProjectDetail from './paginas/ProjectDetail';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

/*<div className="content">
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
      <script src='js/script.js'></script>*/


const Portfolio = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
          <Route path="/start" element={<Start />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<AboutMe />} />
          <Route path="/home" element={<Main />} />
          <Route path="/projects" element={<ProjectDetail />} />
        </Routes>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
  );
};

export default Portfolio;