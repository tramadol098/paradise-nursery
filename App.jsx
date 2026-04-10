import React from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1>Paradise Nursery</h1>
        <p>Bring nature into your home</p>
        <button className="get-started">Get Started</button>
      </div>
      
      <AboutUs />
    </div>
  );
}

export default App;
