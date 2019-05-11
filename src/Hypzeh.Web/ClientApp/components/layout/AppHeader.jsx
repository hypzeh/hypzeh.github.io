import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { APP_SIZE, PRIMARY } from '../../styles/variables';
import media from '../../styles/media';
import { pages } from '../../lib/navigation';
import Icon from '../shared/Icon';

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

  svg {
    height: inherit;
    width: auto;
    background: ${PRIMARY.colour};
    border-radius: .25rem;
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

const AppHeader = () => (
  <Header>
    <Navbar>
      <NavBrand exact to="/" aria-label="nick-smirnoff">
        <Icon icon="ns-logo" />
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

export default AppHeader;
