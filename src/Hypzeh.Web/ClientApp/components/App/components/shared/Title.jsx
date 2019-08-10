import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  margin: 0 1rem;
  text-transform: uppercase;
  text-align: center;
`;

const Header = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 5em;
`;

const Title = ({ text }) => (
  <Wrapper>
    <Header>{text}</Header>
  </Wrapper>
);

Title.propTypes = propTypes;

export default Title;
