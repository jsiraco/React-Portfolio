import React from 'react';
import 'bulma/css/bulma.min.css';
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
      <Header />
      <Navbar />
      <section className="hero hero-image ">
        <div className="hero-body">
        </div>
      </section>
      {projectsInfo.map((project) =>
        <div className="columns" id="Work">
          <div className="column is-1">
            {/* <!-- empty --> */}
          </div>
          <div className="columns" id="Work">
            <div className="column is-8">
              {/* <!-- Image Cards --> */}
              {/* <ProjectCards title={project.title} img={project.img} alt={project.alt} tech={project.tech} /> */}
            </div>
          </div>
        </div>
      )}
      <Content />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
