import React from 'react';
import './App.css';
import Header from './Header';
import Logo from './Logo';
// import Counter from './Counter-Wrong';
import Counter from './Counter-Right';

const App = () => (
  <div className="App">
    <Header>
      <Logo />
      <Counter />
    </Header>
  </div>
);

export default App;
