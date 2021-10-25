import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Loader.styles';

const propTypes = {
  className: PropTypes.string,
  show: PropTypes.bool,
};

const defaultProps = {
  className: '',
  show: true,
};

const Loader = ({ className, show }) => (
  <Styles.Wrapper className={className}>
    {show && (<Styles.ProgressLine />)}
  </Styles.Wrapper>
);

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
