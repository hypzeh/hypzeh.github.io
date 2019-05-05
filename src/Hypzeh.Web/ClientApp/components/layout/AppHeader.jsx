import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { appHeaderHeight, primaryBackground, primaryColour } from '../../styles/variables';
import media from '../../styles/media';
import { pages } from '../../lib/navigation';

const AppHeader = () => (
  <Header>
    <Navbar>
      <NavBrand exact to="/">
        <span>NS</span>
      </NavBrand>
      <NavItems>
        {
          pages
            .filter(({ isHidden }) => !isHidden)
            .map(({ name, link }) => (
              <NavItem key={name} to={link}>{name}</NavItem>
            ))
        }
      </NavItems>
    </Navbar>
  </Header>
);

const Header = styled.header`
  position: relative;
  height: ${appHeaderHeight};
  background: ${primaryBackground};
  z-index: 1;
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
  border: 1px solid white;
  color: white;
`;

const NavItems = styled.div`
  margin-left: auto;

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
  color: ${primaryColour};
  text-decoration: none;
  text-transform: uppercase;

  :hover {
    background: ${primaryColour};
    color: black;
  }
`;

export default AppHeader;
