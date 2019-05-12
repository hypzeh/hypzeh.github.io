import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { APP_SIZE, PRIMARY } from '../../styles/variables';

const blink = keyframes`
  0% { opacity: 1; }
  45% { opacity: 1; }
  50% { opacity: 0; }
  95% { opacity: 0; }
  100% { opacity: 1; }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: ${APP_SIZE.main};
  background: ${PRIMARY.background};
  z-index: 1;

  .Cursor {
    position: absolute;
    opacity: 1;
    animation: ${blink} 1s linear infinite;
  }
`;

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

AppMain.propTypes = propTypes;
AppMain.defaultProps = defaultProps;

export default AppMain;
