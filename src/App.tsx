import React from 'react';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Project } from './components/project';
import { ProjectCards } from './components/projectCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <head>
        <title>Portfolio.js</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
      </head>
      <Header />
      <Navbar />
      <ProjectCards />
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
