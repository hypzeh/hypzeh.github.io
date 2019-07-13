import React, { useContext } from 'react';
import styled from 'styled-components';

import types from '../../../propTypes';
import { breakpoints } from '../../../utils/style/media';
import { ViewContext, viewActions } from '../../../contexts/view';
import { useWindowSize } from '../../../hooks';
import Panel from './components/Panel';

const Container = styled.div`
  border: 5px solid red;
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
`;

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Main = ({ children }) => {
  const { view, dispatch } = useContext(ViewContext);
  const size = useWindowSize();

  if (size.width >= breakpoints.medium && view.isPanelOpen) {
    dispatch(viewActions.closePanel());
  }

  return (
    <Container>
      {(size.width >= breakpoints.medium || view.isPanelOpen) && (<Panel />)}
      {children}
    </Container>
  );
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;

export default Main;
