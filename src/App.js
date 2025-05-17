import React from 'react';
import './App.css';
import ProjectCard from "./ProjectCard";
const projects = [
  {
    title: "E-Commerce Clothing Website",
    description: "Built the Express.js & Django Backend using GraphQL API Architecture, Along with the Go Middleware",
    images: ["/clothing3.png", "/clothing2.png", "/clothing.png"],
    link: "https://github.com/codingishard444/Thrift_Backend"
  },
  {
    title: "Villa Rental Website",
    description: "Built the Spring Boot Backend using REST API Architecture with Additional Security Features",
    images: ["/villa_rental.png", "/villa2.png"],
    link: "https://github.com/ghjknehbor/Non-Relational-Backend"
  },
  {
    title: "Custom AI chatbot for customer service & Webhook Integration",
    description: "Trained an LLM using Unsloth and Google Colab's T4 GPU, Deployed it in public API and Integrated with Webhooks ",
    images: ["/chatbot.png"],
    link: "https://colab.research.google.com/drive/1LghtBSVPbN4qqIF9XnFp1zuIfiv02_9E?usp=sharing"
  }
];
function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <a href="#work" className="nav-link active">Work</a>
          <a href="https://www.linkedin.com/in/bryant-gabriel-effendi-14b647300/" className="nav-link">LinkedIn</a>
          <a href="https://github.com/codingishard444" className="nav-link">Github</a>
        </div>
      </nav>

      {/* Main Hero Section */}
      <header className="hero">
        <h2 className="hero-title">Hi, I'm Bryant Effendi, A Software Developer!</h2>
        <p className="hero-subtitle">Scroll down to see some of my projects!</p>
        <div className="arrow">&#x25BC;</div> {/* Downward arrow */}
      </header>
    {/* Transition Image Section */}
      <div className="projects-transition"></div>
      {/* Project Showcase Section */}
      <section id="work" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;