import React from 'react';
import PropTypes from 'prop-types';

import NSLogo from '../../assets/svg/ns-logo.svg';
import Github from '../../assets/svg/github.svg';

const Icon = (props) => {
  switch (props.icon.toLowerCase()) {
  case 'github':
    return (<Github {...props} />);

  case 'ns-logo':
  default:
    return (<NSLogo {...props} />);
  }
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;