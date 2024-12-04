// src/Components/Home.js
import React, { useState, useEffect } from 'react';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('./data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.error("Error cargando los proyectos:", err);
      });
  }, []);

  return (
    <div className="home">
      <h1>Bienvenido</h1>
      <p>Soy Jordi, desarrollador web.</p>
      <p>Aquí tienes mi portafolio para la práctica de React de IAW</p>
      <p>Prueba a arrastrar los proyectos a izquierda o derecha</p>
      
      {/* Pasamos los proyectos como prop al componente Projects */}
      <Projects projects={projects} />
      
      <Contact />
    </div>
  );
};

export default Home;