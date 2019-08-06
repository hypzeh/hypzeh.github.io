import React from 'react';
import styled from 'styled-components';

import types from '../../../types';
import media from '../../../utils/style/media';
import { TERTIARY } from '../../../utils/style/variables';
import { Scroller } from '../../shared';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Container = styled.div`
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

const Panel = ({ children }) => (
  <Container>
    <Scroller width="15rem">
      {children}
    </Scroller>
  </Container>
);

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;
