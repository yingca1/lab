import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './index';
import Greeting from './Greeting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Greeting outputs `Hello in h2 tag`', () => {
  const wrapper = shallow(<Greeting greeting={'Hello world'} />);
  const welcome = <h2>Hello world</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
