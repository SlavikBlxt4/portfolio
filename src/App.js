import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Start from './paginas/Start';
import Contact from './paginas/Contact';
import Main from './paginas/Main';
import ProjectDetail from './paginas/ProjectDetail';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import StarField from './componentes/Starfield';







const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <StarField />
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
  const [setPage] = useState('/');
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Start setPage={setPage} /></Layout>} />
        <Route path="/contact" element={<Layout><Contact setPage={setPage} /></Layout>} />
        <Route path="/home" element={<Layout><Main setPage={setPage} /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectDetail setPage={setPage} /></Layout>} />
      </Routes>
    </Router>
    
  );
};

export default App;


