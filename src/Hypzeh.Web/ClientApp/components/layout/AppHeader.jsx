import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
  <Header>
    <div>Nick Smirnoff.</div>
    <Nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </Nav>
  </Header>
);

const Header = styled.header`
  display: flex;
`;

const Nav = styled.nav`
  display:flex;
  flex-grow: 1;
  justify-content: flex-end;

  a {
    margin: 0 .1rem;
  }
`;

export default AppHeader;
