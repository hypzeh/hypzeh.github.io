import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  border: 3px solid blue;
  background-color: #202225;
  overflow: hidden;
  display: flex;
  width: 4.5rem;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  contain: layout;
`;

const ScrollerWrapper = styled.div`
  border: 3px solid green;
  width: 5.625rem;
  contain: layout paint style;
  position: relative;
  display: flex;
  height: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;

const Scroller = styled.div`
  border: 3px solid yellow;
  user-select: none;
  padding: 12px 0 0;
  overflow-x: hidden;
  overflow-y: scroll;
  flex: 1 1 auto;
  min-height: 0;
`;

const Navbar = () => (
  <Container>
    <ScrollerWrapper>
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
      </Scroller>
    </ScrollerWrapper>
  </Container>
);

export default Navbar;
