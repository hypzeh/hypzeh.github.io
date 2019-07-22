import React from 'react';
import styled from 'styled-components';

import { SECONDARY } from '../../../utils/style/variables';
import navigation from '../../../utils/navigation';
import { Scroller } from '../../shared';
import NavItem from './components/NavItem';

const Container = styled.nav`
  width: 4.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${SECONDARY.background};
  overflow: hidden;
`;

const Separator = styled.hr`
  margin-inline-start: .5rem;
  margin-inline-end: .5rem;
`;

const Navbar = () => (
  <Container>
    <Scroller width="5.625rem" overflow="scroll">
      <NavItem path="/" title="Nick Smirnoff" />
      <Separator />
      {navigation
        .filter(({ defaultPath }) => defaultPath !== '/')
        .map(({ title, defaultPath }) => (
          <NavItem key={defaultPath} path={defaultPath} title={title} />
        ))
      }
    </Scroller>
  </Container>
);

export default Navbar;
