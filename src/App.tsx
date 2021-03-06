import React from 'react';
import 'bulma/css/bulma.min.css';

import enlightenment from "./static/enlightenment.png";
import codeQuiz from "./static/codeQuiz.png";
import persist from "./static/persist.png";
import portfolioV3 from "./static/portfolioV3.png";
import teamProfile from "./static/teamProfile.png";
import portrait from "./static/portrait.png";

import JSResume from "./static/resumeJS.pdf"

import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { ProjectCards } from './components/projectCard';
import { Caption } from './components/caption';

import './App.css';

const captions = [
  {
    id: "AboutMe",
    section: "About Me"
  },
  {
    id: "Work",
    section: "Work"
  },
  {
    id: "ContactMe",
    section: "Contact"
  },
]

const projectsInfo = [
  {
    size: 10,
    offset: 0,
    title: "Persist",
    gitHub: "https://github.com/OneFJef/Persist",
    img: persist,
    liveSite: "https://ancient-ravine-93786.herokuapp.com/",
    alt: "Screenshot of a time-budgeting app with saved tasks and a resposive daily planner",
    tech: "Sequelize, Node.js, Handlebars.js, Heroku"
  },
  {
    size: 5,
    offset: 1,
    title: "Enlightenment",
    gitHub: "https://github.com/jsiraco/Enlightenment",
    img: enlightenment,
    liveSite: "https://jsiraco.github.io/Enlightenment/",
    alt: "Screenshot with multiple images in a panel formation with like buttons",
    tech: "jQuery, Bulma, Javascript, APIs"
  },
  {
    size: 5,
    offset: 0,
    title: "Portfolio V3",
    gitHub: "https://github.com/jsiraco/portfolio_v3",
    img: portfolioV3,
    liveSite: "https://jsiraco.github.io/portfolio_v3/",
    alt: "Screenshot of a demo Portfolio",
    tech: "HTML, CSS, Flexbox, Bulma"
  },
  {
    size: 5,
    offset: 1,
    title: "Inquirer Team Generator",
    gitHub: "https://github.com/jsiraco/team_profile_generator",
    img: teamProfile,
    liveSite: "",
    alt: "Screenshot of an html page generated with inquire and node.js",
    tech: "Jest, Node.js, Javascript, Inquirer"
  },
  {
    size: 5,
    offset: 0,
    title: "Code Quiz",
    gitHub: "https://github.com/jsiraco/Code_Quiz_JS",
    img: codeQuiz,
    liveSite: "https://github.com/jsiraco/Code_Quiz_JS",
    alt: "Screenshot of a timed code quiz with multiple choice answers",
    tech: "HTML, Javascript, CSS"
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar resume={JSResume}/>
      <Caption id={captions[0].id} section={captions[0].section}/>
      <Content img={portrait} alt="Photo of Josef"/>
      <Caption id={captions[1].id} section={captions[1].section}/>
      <div className="columns is-multiline">
        <div className="column is-1"></div>
        {projectsInfo.map((project, index) =>
          <ProjectCards key={index} size={project.size} offest={project.offset} title={project.title} gitHub={project.gitHub} img={project.img} liveSite={project.liveSite} alt={project.alt} tech={project.tech} />
        )}
      </div>
      <Caption id={captions[2].id} section={captions[2].section}/>
      <Footer />
    // </div>
  );
}

export default App;
