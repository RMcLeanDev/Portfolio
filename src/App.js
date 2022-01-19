import React from 'react';
import './App.scss';
import Home from './Home';

function App(props) {

  console.log(props)
  
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
