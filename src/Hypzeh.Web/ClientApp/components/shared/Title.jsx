import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Wrapper = styled.h1`
  margin: 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 3em;
`;

const Title = ({ text }) => (
  <Wrapper>{text}</Wrapper>
);

Title.propTypes = propTypes;

export default Title;
