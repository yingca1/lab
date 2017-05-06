import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './index';
import { Greeting } from './Greeting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
