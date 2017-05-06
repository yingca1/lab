import React from 'react';
import PropTypes from 'prop-types';
import withViewport from '../withViewport';

const Greeting = (
  { children, viewport },
  { theme },
) => (
  <h2
    style={{
      fontSize: viewport ? viewport.height / 10 : 28,
      ...theme.h2
    }}
  >
    {children}
  </h2>
)

Greeting.contextTypes = {
  theme: PropTypes.object,
};

const ResizableGreeting = withViewport(Greeting);

export { Greeting };
export { ResizableGreeting };
