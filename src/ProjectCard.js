import React, { useState } from "react";

const ProjectCard = ({ title, description, images, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div 
        className="project-image" 
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {images.length > 1 && (
          <>
            <button className="nav-btn left" onClick={handlePrev}>&lt;</button>
            <button className="nav-btn right" onClick={handleNext}>&gt;</button>
          </>
        )}
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
