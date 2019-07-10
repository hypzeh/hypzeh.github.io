import React from 'react';
import styled from 'styled-components';

import types from '../../../types';

const Container = styled.div`
  border: 5px solid red;
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
`;

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Main = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
