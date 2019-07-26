import React, { useContext } from 'react';
import styled from 'styled-components';

import types from '../../../types';
import { breakpoints } from '../../../utils/style/media';
import { ViewContext, viewActions } from '../../../contexts/view';
import { useWindowSize } from '../../../hooks';
import Panel from '../Panel';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Container = styled.main`
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
`;

const Main = ({ children }) => {
  const [{ isPanelOpen }, viewDispatch] = useContext(ViewContext);
  const size = useWindowSize();

  if (size.width >= breakpoints.medium && isPanelOpen) {
    viewDispatch(viewActions.closePanel());
  }

  return (
    <Container>
      {(size.width >= breakpoints.medium || isPanelOpen) && (<Panel />)}
      {children}
    </Container>
  );
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
