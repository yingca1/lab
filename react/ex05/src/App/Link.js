import React from 'react';
import PropTypes from 'prop-types';

const Link = (
  { children, ...props },
  { theme },
) => (
  <a
    {...props}
    style={{
      ...theme.link,
      textDecoration: 'none',
      borderBottomStyle: 'dashed',
      borderBottomWidth: 2,
      borderBottomColor: theme.link.color,
    }}
  >
    {children}
  </a>
)

Link.contextTypes = {
  theme: PropTypes.object,
};

export default Link;

