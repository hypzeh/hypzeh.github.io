import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Status.styles';
import variants from './variants';

const propTypes = {
  variant: PropTypes.oneOf(Object.values(variants)),
  message: PropTypes.string.isRequired,
};

const defaultProps = {
  variant: variants.STANDARD,
};

const Status = ({ variant, message }) => (
  <Styles.Wrapper variant={variant}>
    <span>{message}</span>
  </Styles.Wrapper>
);

Status.propTypes = propTypes;
Status.defaultProps = defaultProps;

export default Status;
