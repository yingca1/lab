import React from 'react';
import './App.css';
import Header from './Header';
import { ResizableLogo as Logo } from './Logo';
import { ResizableGreeting as Greeting } from './Greeting';

const App = ({ greeting }) => (
  <div className="App">
    <Header>
      <Logo />
      <Greeting greeting={greeting} />
    </Header>
  </div>
);

export default App;
