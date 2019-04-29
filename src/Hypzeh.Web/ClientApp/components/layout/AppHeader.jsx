import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { appHeaderHeight } from '../../styles/variables';

const AppHeader = () => (
  <Header>
    <Navbar>
      <NavBrand to="/">Nick Smirnoff</NavBrand>
      <NavItems>
        <NavItem to="/error"><span role="img" aria-label="skull">💀</span></NavItem>
        <NavItem to="/about">ABOUT</NavItem>
        <NavItem to="/projects">PROJECTS</NavItem>
        <a href="mailto:test@test.test">CONTACT</a>
      </NavItems>
    </Navbar>
  </Header>
);

const Header = styled.header`
  height: ${appHeaderHeight};
  background: black;
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
`;

const NavItem = styled(NavLink)`
  margin: 0 .5rem;
`;

export default AppHeader;
