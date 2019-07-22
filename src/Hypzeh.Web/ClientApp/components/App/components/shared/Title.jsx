import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import types from '../../types';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Container = styled.h1`
  margin: 0 1rem;
  text-transform: uppercase;
  text-align: center;
`;

const Title = ({ children }) => (
  <Container>
    <Typist cursor={{ show: false }}>
      {children}
    </Typist>
  </Container>
);

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
