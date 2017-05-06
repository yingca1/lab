import React from 'react';
import './App.css';
import Header from './Header';
import Logo from './Logo';
import Greeting from './Greeting';

const App = ({ greeting }) => (
  <div className="App">
    <Header>
      <Logo />
      <Greeting greeting={greeting} />
    </Header>
  </div>
);

export default App;
