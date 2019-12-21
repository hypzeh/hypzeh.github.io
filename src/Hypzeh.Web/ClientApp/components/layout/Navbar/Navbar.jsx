import React from 'react';
import styled from 'styled-components';

import Projects from './Projects';
import Pages from './Pages';

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 999;
`;

const Navbar = () => (
  <Wrapper>
    <Projects />
    <Pages />
  </Wrapper>
);

export default Navbar;
