import React from 'react';
import styled from 'styled-components';

import { propTypes, defaultProps } from '../../types/layout/appMain';

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

const Main = styled.main`
  min-height: 100vh;
  position: relative;
  z-index: 1;
  background: #212121;
`;

AppMain.propTypes = propTypes;
AppMain.defaultProps = defaultProps;

export default AppMain;
