import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Start from './paginas/Start';
import AboutMe from './paginas/AboutMe';
import Contact from './paginas/Contact';
import Main from './paginas/Main';
import ProjectDetail from './paginas/ProjectDetail';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import { Link } from 'react-router-dom';




const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          {children}
        </CSSTransition>
      </TransitionGroup>
      {location.pathname !== '/' && location.pathname !== '/contact' && <Footer />}
    </div>
  );
};




const App = () => {
  const [page, setPage] = useState('/');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Start setPage={setPage} /></Layout>} />
        <Route path="/aboutme" element={<Layout><AboutMe setPage={setPage} /></Layout>} />
        <Route path="/contact" element={<Layout><Contact setPage={setPage} /></Layout>} />
        <Route path="/home" element={<Layout><Main setPage={setPage} /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectDetail setPage={setPage} /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;