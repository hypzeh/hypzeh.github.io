import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { APP_SIZE, PRIMARY } from '../../styles/variables';

const Main = styled.main`
  position: relative;
  min-height: ${APP_SIZE.main};
  height: auto;
  background: ${PRIMARY.background};
  z-index: 1;

  section:only-child {
    min-height: inherit;
    height: inherit;
  }
`;

const AppMain = ({ children }) => (
  <Main>
    {children}
  </Main>
);

AppMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppMain;
