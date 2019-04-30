import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { appHeaderHeight, primaryBackground } from '../../styles/variables';

const AppHeader = () => (
  <Header>
    <Navbar>
      <NavBrand to="/">Nick Smirnoff</NavBrand>
      <NavItems>
        <NavItem to="/error"><span role="img" aria-label="skull">💀</span></NavItem>
        <NavItem to="/about">ABOUT</NavItem>
        <NavItem to="/projects">PROJECTS</NavItem>
        <NavItem to="/contact">CONTACT</NavItem>
      </NavItems>
    </Navbar>
  </Header>
);

const Header = styled.header`
  height: ${appHeaderHeight};
  background: ${primaryBackground};
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavBrand = styled(NavLink)`
  padding: .5rem;
`;

const NavItems = styled.div`
  margin-left: auto;
  text-transform: uppercase;

  .active {
    border-bottom-color: white;
  }
`;

const NavItem = styled(NavLink)`
  margin: 0 .5rem;
  padding: .25rem;
  border: 1px solid transparent;
  text-decoration: none;
  color: white;

  :hover {
    background: white;
    color: black;
  }
`;

export default AppHeader;
