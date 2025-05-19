import React from "react";

const ProjectCard = ({ title, description, images, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="feature-card-link">
      <div className="feature-card">
        <img src={images[0]} alt={title} />
      </div>
      <div className="feature-title">
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default ProjectCard;
