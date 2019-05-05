import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { appHeaderHeight, primaryBackground, primaryColour } from '../../styles/variables';
import media from '../../styles/media';
import { pages } from '../../lib/navigation';
import Logo from '../../assets/svg/ns-logo.svg';

const AppHeader = () => (
  <Header>
    <Navbar>
      <NavBrand exact to="/">
        <Logo alt="NS" />
        <span>Nick Smirnoff</span>
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
  height: 2rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bolder;
  color: ${primaryColour};
  border: 1px solid ${primaryColour};

  svg {
    height: inherit;
    width: auto;
    background: ${primaryColour};
  }

  span {
    padding: 0 .5rem;
  }
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
  padding: .25rem;
  border: 1px solid transparent;
  color: ${primaryColour};
  text-decoration: none;
  text-transform: uppercase;

  & + & {
    margin-left: .25rem;
  }

  :hover {
    background: ${primaryColour};
    color: black;
  }
`;

export default AppHeader;
