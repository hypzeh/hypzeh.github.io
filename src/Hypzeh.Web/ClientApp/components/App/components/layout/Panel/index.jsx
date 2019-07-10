import React from 'react';
import styled from 'styled-components';

import { Scroller } from '../../shared';

const Container = styled.div`
  border: 5px solid green;
  width: 15rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #2f3136;
  overflow: hidden;
`;

const Panel = () => (
  <Container>
    <Scroller>
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
