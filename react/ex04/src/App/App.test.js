import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './index';
import { Greeting } from './Greeting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Greeting outputs `Hello world in h2 tag`', () => {
  const wrapper = shallow(<Greeting greeting={'Hello world'} />);
  const welcome = `Hello world`;
  const greetingNode = wrapper.node;
  expect(greetingNode.type).toEqual('h2');
  expect(greetingNode.props.children).toEqual(welcome);
});

it('The fontSize that Greeting outputted is 1/10th large of viewpor.height', () => {
  const viewport = { width: 1024, height: 768 };
  const wrapper = shallow(<Greeting greeting={'Hello world'} viewport={viewport} />);
  const greetingNode = wrapper.node;
  expect(greetingNode.props.style.fontSize).toEqual(76.8);
});
