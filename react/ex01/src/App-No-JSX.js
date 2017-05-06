import React from 'react';
import logo from './logo.svg';
import './App.css';

// React.createElement(component, props, ...children)
const App = ({ greeting }) => {
  return React.createElement('div', { className: 'App' },
    React.createElement('div', { className: 'App' },
      React.createElement('div', { className: 'App-header' },
        React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
        React.createElement('h2', null, greeting),
      )
    )
  );
}

export default App;
