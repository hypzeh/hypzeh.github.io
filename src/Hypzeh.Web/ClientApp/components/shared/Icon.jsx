import React from 'react';
import PropTypes from 'prop-types';

import NSLogo from '../../assets/svg/ns-logo.svg';
import Github from '../../assets/svg/github.svg';
import LinkedIn from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';

const propTypes = {
  icon: PropTypes.string.isRequired,
};

const Icon = (props) => {
  switch (props.icon.toLowerCase()) {
  case 'github':
    return (<Github {...props} />);

  case 'linkedin':
    return (<LinkedIn {...props} />);

  case 'twitter':
    return (<Twitter {...props} />);

  case 'ns-logo':
  default:
    return (<NSLogo {...props} />);
  }
};

Icon.propTypes = propTypes;

export default Icon;
