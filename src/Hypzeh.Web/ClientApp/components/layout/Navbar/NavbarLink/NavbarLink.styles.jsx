import styled from 'styled-components';
import { NavLink as BaseNavLink } from 'react-router-dom';

const Wrapper = styled(BaseNavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 5rem;
  height: 5rem;
  max-height: 5rem;
  border-color: transparent;
  border-style: solid;
  border-width: 0 3px;
  text-decoration: none;
  color: ${({ theme }) => theme.colours.navbar_link_colour};

  &:hover {
    background-color: ${({ theme }) => theme.colours.navbar_link_background_colour_hover};
    color: ${({ theme }) => theme.colours.navbar_link_colour_hover};
  }

  &.active {
    background-color: ${({ theme }) => theme.colours.navbar_link_background_colour_active};
    color: ${({ theme }) => theme.colours.navbar_link_colour_active};
    border-left-color: ${({ theme }) => theme.colours.navbar_link_border_colour_active};

    &:hover {
      color: ${({ theme }) => theme.colours.navbar_link_colour_active};
    }
  }
`;

export default { Wrapper };
