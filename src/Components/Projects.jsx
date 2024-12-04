// src/Components/Projects.js
import React, { useState, useEffect, useRef } from 'react';  // Importa React y los hooks
import { Swiper, SwiperSlide } from 'swiper/react';  // Importa Swiper y SwiperSlide
import 'swiper/css';  // Importa los estilos correctos
import { Navigation } from 'swiper/modules';  // Importa el módulo de navegación
import { useLocation } from 'react-router-dom';  // Importa useLocation para obtener la ruta actual

const Projects = () => {
  const [projects, setProjects] = useState([]);  // Asegúrate de que el estado se inicializa correctamente
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null);  // Referencia para el Swiper
  const location = useLocation();  // Obtenemos la ruta actual con useLocation

  const isOnProjectsPage = location.pathname === '/projects';  // Verifica si estamos en la página de proyectos

  useEffect(() => {
    fetch('./data/projects.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando proyectos...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(projects) || projects.length === 0) {
    return <p>No hay proyectos disponibles</p>;
  }

  return (
    <div className="projects-swiper">
      <Swiper
        ref={swiperRef}  // Asignamos la referencia aquí
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}  // Habilita las flechas de navegación
        modules={[Navigation]}  // Importación del módulo de navegación
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.image && <img src={project.image} alt={project.title} />}
              {isOnProjectsPage && (
                <div className="project-details">
                  <h4>Detalles del Proyecto</h4>
                  <p>{project.content}</p>  {/* Mostramos los detalles si estamos en /projects */}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;  // Exporta el componente de manera predeterminada