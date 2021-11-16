import React from 'react';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Project } from './components/project';
import { ProjectCards } from './components/projectCard';

import './App.css';

const projectsInfo = [
  {
      title: "Enlightenment",
      img: "",
      alt: "Cards and stuff",
      tech: "jQuery, Bulma, Javascript, CSS"
  },
  {
      title: "Weather Teacker",
      img: "",
      alt: "Cards and stuff",
      tech: "jQuery, Bulma, Javascript, CSS"
  },
  {
      title: "HTML Team Gen",
      img: "",
      alt: "Cards and stuff",
      tech: "jQuery, Bulma, Javascript, CSS"
  },
  {
      title: "You Won't Check",
      img: "",
      alt: "Cards and stuff",
      tech: "jQuery, Bulma, Javascript, CSS"
  },
  {
      title: "Persist",
      img: "",
      alt: "Cards and stuff",
      tech: "jQuery, Bulma, Javascript, CSS"
  },
];

function App() {
  return (
    <div className="App">
      <head>
        <title>Portfolio.js</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
      </head>
      <Header />
      <Navbar />
      {projectsInfo.map((project) => 
      <ProjectCards title={project.title} img={project.img} alt={project.alt} tech={project.tech} />
      )}

      <section className="hero hero-image ">
        <div className="hero-body">
        </div>
      </section>
      <Content />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
