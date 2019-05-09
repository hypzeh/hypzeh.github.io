import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { APP_SIZE, PRIMARY } from '../../styles/variables';
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
  height: ${APP_SIZE.header};
  background: ${PRIMARY.background};
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
  color: ${PRIMARY.colour};
  border: 1px solid ${PRIMARY.colour};

  svg {
    height: inherit;
    width: auto;
    background: ${PRIMARY.colour};
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
    border-bottom-color: ${PRIMARY.colour};
  }

  ${media.small`
    display: none;
  `}
`;

const NavItem = styled(NavLink)`
  padding: .25rem;
  border: 1px solid transparent;
  color: ${PRIMARY.colour};
  text-decoration: none;
  text-transform: uppercase;

  & + & {
    margin-left: .25rem;
  }

  :hover {
    background: ${PRIMARY.colour};
    color: ${PRIMARY.hover};
  }
`;

export default AppHeader;
