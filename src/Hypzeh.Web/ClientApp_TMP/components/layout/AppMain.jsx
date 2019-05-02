import React from 'react';
import styled from 'styled-components';

import { propTypes, defaultProps } from '../../types/layout/appMain';
import { appMainHeight, primaryBackground } from '../../styles/variables';

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

const Main = styled.main`
  min-height: ${appMainHeight};
  position: relative;
  z-index: 1;
  background: ${primaryBackground};
`;

AppMain.propTypes = propTypes;
AppMain.defaultProps = defaultProps;

export default AppMain;
