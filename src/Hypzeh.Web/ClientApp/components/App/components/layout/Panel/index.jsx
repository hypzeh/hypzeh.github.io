import React, { useContext } from 'react';
import styled from 'styled-components';

import types from '../../../types';
import media, { breakpoints } from '../../../utils/style/media';
import { TERTIARY } from '../../../utils/style/variables';
import { ViewContext } from '../../../contexts/view';
import { useWindowSize } from '../../../hooks';
import { Scroller } from '../../shared';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Container = styled.aside`
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${TERTIARY.background};
  overflow: hidden;
  z-index: 1;

  ${media.medium`
    position: absolute;
    top: 0;
    bottom: 0;
  `}
`;

const Panel = ({ children }) => {
  const [{ isPanelOpen }] = useContext(ViewContext);
  const size = useWindowSize();

  if (size.width <= breakpoints.medium && !isPanelOpen) {
    return null;
  }

  return (
    <Container>
      <Scroller width="15rem">
        {children}
      </Scroller>
    </Container>
  );
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;
