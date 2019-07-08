import React from 'react';
import styled from 'styled-components';

import { Scroller } from '../../shared';

const Container = styled.nav`
  border: 1px solid blue;
  width: 4.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #202225;
  overflow: hidden;
`;

const Navbar = () => (
  <Container>
    <Scroller width="5.625rem">
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

export default Navbar;
