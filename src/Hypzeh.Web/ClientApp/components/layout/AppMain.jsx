import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { appMainHeight, primaryBackground } from '../../styles/variables';

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

const Main = styled.main`
  position: relative;
  min-height: ${appMainHeight};
  height: auto;
  background: ${primaryBackground};
  z-index: 1;

  section:only-child {
    min-height: inherit;
    height: inherit;
  }
`;

AppMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppMain;
