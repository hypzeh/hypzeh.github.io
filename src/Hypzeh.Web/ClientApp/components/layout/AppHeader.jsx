import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { appSize, primary } from '../../styles/variables';
import media from '../../styles/media';
import { pages } from '../../lib/navigation';
import Icon from '../shared/Icon';

const AppHeader = () => (
  <Header>
    <Navbar>
      <NavBrand exact to="/">
        <Icon icon="ns-logo" />
        <span>Nick Smirnoff</span>
      </NavBrand>
      <NavItems>
        {
          pages
            .filter(({ isHidden }) => !isHidden)
            .map(({ name, path }) => (
              <NavItem key={name} to={path}>{name}</NavItem>
            ))
        }
      </NavItems>
    </Navbar>
  </Header>
);

const Header = styled.header`
  position: relative;
  height: ${appSize.header};
  background: ${primary.background};
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
  color: ${primary.colour};
  border: 1px solid ${primary.colour};

  svg {
    height: inherit;
    width: auto;
    background: ${primary.colour};
  }

  span {
    padding: 0 .5rem;

    @media (max-width: 185px) {
      display: none;
    }
  }
`;

const NavItems = styled.div`
  margin-left: auto;

  .active {
    border-bottom-color: ${primary.colour};
  }

  ${media.small`
    display: none;
  `}
`;

const NavItem = styled(NavLink)`
  padding: .25rem;
  border: 1px solid transparent;
  color: ${primary.colour};
  text-decoration: none;
  text-transform: uppercase;

  & + & {
    margin-left: .25rem;
  }

  :hover {
    background: ${primary.colour};
    color: black;
  }
`;

export default AppHeader;
