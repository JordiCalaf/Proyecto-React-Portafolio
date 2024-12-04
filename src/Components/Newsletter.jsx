// src/Components/Newsletter.js
import React, { useState, useEffect } from "react";
import "../Newsletter.css";

const Newsletter = () => {
  const [topics, setTopics] = useState([]); // Estado para almacenar los tópicos
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    fetch("./data/projects.json") // Ruta al archivo JSON
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTopics(data); // Guarda los tópicos en el estado
        setLoading(false); // Detén el estado de carga
      })
      .catch((err) => {
        setError(err.message); // Guarda el mensaje de error
        setLoading(false); // Detén el estado de carga
      });
  }, []); // Ejecutar solo al montar el componente

  if (loading) return <p>Cargando newsletter...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(topics) || topics.length === 0) {
    return <p>No hay artículos disponibles en el newsletter</p>;
  }

  return (
    <div className="newsletter">
      <header className="newsletter-header">
        <h1>Project News</h1>
        <p className="newsletter-date">4th December 2024</p>
      </header>

      {topics.map((topic, index) => (
        <section key={index} className="newsletter-section">
        {topic.image && (
          <img
            src={topic.image}
            alt={topic.title}
            className="section-image"
          />
        )}
        <div className="section-content-wrapper">
          <h2 className="section-title">{topic.title}</h2>
          <p className="section-description">{topic.description}</p>
          <p className="section-content">{topic.content}</p>
        </div>
      </section>      
      ))}

      <footer className="newsletter-footer">
        <p>&copy; 2024 Newsletter Inc. - All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Newsletter;
