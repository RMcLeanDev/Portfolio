import React from 'react';
import './App.scss';
import Home from './Components/Home';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {

  function scroll(arg){
    console.log(arg)
    let elementToView = document.getElementById(arg);
    elementToView.scrollIntoView({block:"start", behavior: 'smooth'});
  }
  
  return (
    <div className="App">
      <Header yeScroll={scroll}/>
      <Home />
      <div className="line" id="skills"/>
      <Skills />
      <div className="line" id="projects"/>
      <Projects />
      <div className="line" id="contact"/>
      <Contact />
    </div>
  );
}

export default App;
