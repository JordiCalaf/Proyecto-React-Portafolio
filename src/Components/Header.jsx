// src/Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Mi Portafolio</h1>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/projects">Proyectos</Link>
      <Link to="/contact">Contacto</Link>
      <Link to="/newsletter">Newsletter</Link>
    </nav>
  </header>
);

export default Header;
