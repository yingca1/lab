import React from 'react';
import PropTypes from 'prop-types';

const colorfulTheme = {
  h2: {
    color: 'cyan',
  },
  link: {
    color: 'coral',
  }
}

const monoTheme = {
  h2: {
    color: 'silver',
  },
  link: {
    color: 'dimgrey',
  }
}

const getTheme = (theme) => theme === 'mono' ? monoTheme : colorfulTheme;

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      theme: getTheme(this.props.theme),
    }
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.object
};

export default ThemeProvider;
