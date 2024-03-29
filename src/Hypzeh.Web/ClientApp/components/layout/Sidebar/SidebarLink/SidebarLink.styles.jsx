import styled from 'styled-components';
import { darken, readableColor } from 'polished';
import { NavLink as BaseNavLink } from 'react-router-dom';

const Wrapper = styled(BaseNavLink)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  height: 3rem;
  max-height: 3rem;
  padding: .5rem;
  text-decoration: none;
  font-size: larger;
  color: ${({ theme }) => theme.colours.sidebar_link_colour};

  & > span {
    margin: 0 .25rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colours.sidebar_link_background_colour_hover};
    color: ${({ theme }) => readableColor(theme.colours.sidebar_link_background_colour_hover, '#000', '#fff')};
  }

  &.active {
    background-color: ${({ theme }) => darken(0.2, theme.colours.sidebar_link_background_colour_active)};
    color: ${({ theme }) => readableColor(theme.colours.sidebar_link_background_colour_active, '#000', '#fff')};
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 100%;
`;

export default { Wrapper, Icon };
