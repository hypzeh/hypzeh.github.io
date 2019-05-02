import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { appHeaderHeight, primaryBackground, primaryColour } from '../../styles/variables';
import media from '../../styles/media';

const AppHeader = () => (
  <Header>
    <Navbar>
      <NavBrand exact to="/"><span>NS</span></NavBrand>
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
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 .5rem;
`;

const NavBrand = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .5rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bolder;
  border: 1px solid black;
  color: black;
`;

const NavItems = styled.div`
  margin-left: auto;
  text-transform: uppercase;

  .active {
    border-bottom-color: ${primaryColour};
  }

  ${media.small`
    display: none;
  `}
`;

const NavItem = styled(NavLink)`
  margin: 0 .5rem;
  padding: .25rem;
  border: 1px solid transparent;
  text-decoration: none;
  color: ${primaryColour};

  :hover {
    background: ${primaryColour};
    color: black;
  }
`;

export default AppHeader;
