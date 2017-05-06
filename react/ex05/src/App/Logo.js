import React from 'react';
import logo from '../logo.svg';
import withViewport from '../withViewport';

const Logo = ({ viewport }) => (
  <img
    src={logo}
    className="App-logo"
    alt="logo"
    height={viewport ? viewport.height / 2 : 120}
  />
)

const ResizableLogo = withViewport(Logo);

export { Logo };
export { ResizableLogo };
