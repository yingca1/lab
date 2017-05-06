import React, { Component } from 'react';
import logo from '../logo.svg';

class Logo extends Component {

  constructor() {
    super();
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        height={this.state.viewport.height / 2}
      />
    );
  }
}

export default Logo;
