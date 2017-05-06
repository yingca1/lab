import React from 'react';
import './App.css';
import Header from './Header';
import Logo from './Logo';
import CustomTextInput from './CustomTextInput';

const App = () => (
  <div className="App">
    <Header>
      <Logo />
      <CustomTextInput />
    </Header>
  </div>
);

export default App;
