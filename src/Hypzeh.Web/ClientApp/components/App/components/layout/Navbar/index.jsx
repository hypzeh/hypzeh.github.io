import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  border: 1px solid yellow;
  width: 4.5rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Navbar = () => (
  <Container />
);

export default Navbar;
