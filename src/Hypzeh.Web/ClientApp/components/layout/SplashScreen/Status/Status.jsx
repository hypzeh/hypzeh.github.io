import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Status.styles';

const propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
};

const defaultProps = {
  type: 'standard',
};

const Status = ({ type, message }) => (
  <Styles.Wrapper type={type}>
    <span>{message}</span>
  </Styles.Wrapper>
);

Status.propTypes = propTypes;
Status.defaultProps = defaultProps;

export default Status;
