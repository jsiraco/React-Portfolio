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
    title: "Persist",
    img: "http://placecorgi.com/260/180",
    alt: "Screenshot of a time-budgeting app with saved tasks and a resposive daily planner",
    tech: "Sequelize, Node.js, Handlebars.js, Heroku"
  },
  {
    title: "Enlightenment",
    img: "http://placecorgi.com/260/180",
    alt: "Cards and stuff",
    tech: "jQuery, Bulma, Javascript, APIs"
  },
  {
    title: "Portfolio V3",
    img: "http://placecorgi.com/260/180",
    alt: "Cards and stuff",
    tech: "HTML, CSS, Flexbox, Bulma"
  },
  {
    title: "Inquirer Team Generator",
    img: "http://placecorgi.com/260/180",
    alt: "Screenshot of an html page generated with inquire and node.js",
    tech: "Node.js, Javascript, Inquirer CLI"
  },
  {
    title: "Code Quiz",
    img: "http://placecorgi.com/260/180",
    alt: "Screenshot of a timed code quiz with multiple choice answers",
    tech: "HTML, Javascript, CSS"
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* <section className="hero hero-image ">
        <div className="hero-body">
        </div>
      </section> */}
      {projectsInfo.map((project) =>
        <div className="columns" id="Work">
          <div className="columns" id="Work">
            <div className="column is-8">
              {/* <!-- Image Cards --> */}
              <ProjectCards title={project.title} img={project.img} alt={project.alt} tech={project.tech} />
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
