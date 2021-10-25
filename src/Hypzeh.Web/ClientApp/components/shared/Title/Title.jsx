import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Title.styles';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Title = ({ text }) => (
  <Styles.Wrapper>
    {text}
  </Styles.Wrapper>
);

Title.propTypes = propTypes;

export default Title;
