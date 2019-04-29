import React from 'react';
import styled from 'styled-components';

import { propTypes, defaultProps } from '../../types/layout/appMain';
import { appHeaderHeight, primaryBackground } from '../../styles/variables';

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

const Main = styled.main`
  min-height: calc(100vh - ${appHeaderHeight});
  position: relative;
  z-index: 1;
  background: ${primaryBackground};
`;

AppMain.propTypes = propTypes;
AppMain.defaultProps = defaultProps;

export default AppMain;
