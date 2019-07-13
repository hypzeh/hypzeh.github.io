import React from 'react';
import styled from 'styled-components';

import { SECONDARY } from '../../../utils/style/variables';
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

  hr {
    margin-inline-start: .5rem;
    margin-inline-end: .5rem;
  }
`;

const placeholder = [
  { path: '/smallify', title: 'Smallify' },
  { path: '/react-core-boilerplate', title: 'React Core Boilerplate' },
  { path: '/test', title: 'test' },
  { path: '/test1', title: 'test1' },
  { path: '/test2', title: 'test2' },
  { path: '/test3', title: 'test3' },
  { path: '/test4', title: 'test4' },
  { path: '/test5', title: 'test5' },
  { path: '/test6', title: 'test6' },
  { path: '/test7', title: 'test7' },
  { path: '/test8', title: 'test8' },
  { path: '/test9', title: 'test9' },
  { path: '/test10', title: 'test10' },
];

const Navbar = () => (
  <Container>
    <Scroller width="5.625rem">
      <NavItem path="/" title="Nick Smirnoff" />
      <hr />
      {placeholder.map(value => (
        <NavItem key={value.title} path={value.path} title={value.title} />
      ))}
    </Scroller>
  </Container>
);

export default Navbar;
