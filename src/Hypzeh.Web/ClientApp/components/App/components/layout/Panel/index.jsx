import React from 'react';
import styled from 'styled-components';

import media from '../../../utils/style/media';
import { Scroller } from '../../shared';

const Container = styled.div`
  border: 5px solid green;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #2f3136;
  overflow: hidden;
  z-index: 1;

  ${media.medium`
    position: absolute;
    top: 0;
    bottom: 0;
  `}
`;

const Panel = () => (
  <Container>
    <Scroller width="15rem">
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
      <h1>1</h1>
    </Scroller>
  </Container>
);

export default Panel;
