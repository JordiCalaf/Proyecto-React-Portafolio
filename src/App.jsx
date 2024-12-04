import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Newsletter from './Components/Newsletter';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProjectDetails from './Components/ProjectDetails';
import "./App.css"

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Ruta dinámica para detalles */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;