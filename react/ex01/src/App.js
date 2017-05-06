import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({ greeting }) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{greeting}</h2>
    </div>
  </div>
);

export default App;
