import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { appSize, primary } from '../../styles/variables';

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

const Main = styled.main`
  position: relative;
  min-height: ${appSize.main};
  height: auto;
  background: ${primary.background};
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
