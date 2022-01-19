import React from 'react';
import './App.scss';
import Home from './Components/Home';
import Header from './Components/Header';

function App(props) {

  console.log(props)
  
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
