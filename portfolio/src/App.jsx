import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Start from './paginas/Start';
import AboutMe from './paginas/AboutMe';
import Contact from './paginas/Contact';
import Main from './paginas/Main';
import ProjectDetail from './paginas/ProjectDetail';
import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Start /></Layout>} />
        <Route path="/aboutme" element={<Layout><AboutMe /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/home" element={<Layout><Main /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectDetail /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;