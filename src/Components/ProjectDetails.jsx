// src/Components/ProjectDetails.js
import React from 'react';
import "../PDetails.css"

const ProjectDetails = ({ project }) => {
  return (
    <div className="project-details-container">
      <h4 className="project-title">{project.title}</h4>
      <p className="project-description">{project.description}</p>
      {project.image && <img className="project-image" src={project.image} alt={project.title} />}
      <div className="project-content-container">
        <p className="project-content">{project.content}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;