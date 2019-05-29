import React from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';

const app = () => {

  return (
    <div className="App">
      <header className="App-header">
        
       <Canvas title='Canvas1'/>
          
        <p> Ciao Marica! </p>
        
      </header>
    </div>
  );
}

export default app;
