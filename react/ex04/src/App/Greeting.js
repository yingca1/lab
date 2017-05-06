import React from 'react';
import withViewport from '../withViewport';

const Greeting = ({ greeting, viewport }) => (
  <h2
    style={{
      fontSize: viewport ? viewport.height / 10 : 28,
    }}
  >
    {greeting}
  </h2>
)

const ResizableGreeting = withViewport(Greeting);

export { Greeting };
export { ResizableGreeting };
