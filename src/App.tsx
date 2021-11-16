import React from 'react';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Project } from './components/project';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Content />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
