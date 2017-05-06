import React, { Component } from 'react';

const withViewport = (ComposedComponent) => {
  return class Viewport extends Component {
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
      return <ComposedComponent
          {...this.props}
          viewport={this.state.viewport}
        />;
    }
  }
}

export default withViewport;
