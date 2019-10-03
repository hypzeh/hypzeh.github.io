import React from 'react';
import PropTypes from 'prop-types';

import NS from './assets/ns.svg';
import Github from './assets/github.svg';
import Smallify from './assets/smallify.svg';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Icon = ({ name, ...styles }) => {
  switch (name.toLowerCase()) {
  case 'github':
    return (<Github {...styles} />);
  case 'smallify':
    return (<Smallify {...styles} />);
  case 'ns':
  default:
    return (<NS {...styles} />);
  }
};

Icon.propTypes = propTypes;

export default Icon;
