import React from 'react';
import styled from 'styled-components';

import types from '../../../types';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Wrapper = styled.main`
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
`;

const Main = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
