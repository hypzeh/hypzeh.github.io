import React from 'react';
import styled from 'styled-components';

import types from '../../../types';

const Flex = styled.main`
  border: 3px solid blue;
  flex: 1 1 auto;
  margin-left: 0px;
  margin-right: 0;
  overflow: hidden;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
`;

const AnotherFlex = styled.div`
  border: 3px solid green;
  flex: 1 1 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
`;

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Main = ({ children }) => (
  <Flex>
    <AnotherFlex>
      {children}
    </AnotherFlex>
  </Flex>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
