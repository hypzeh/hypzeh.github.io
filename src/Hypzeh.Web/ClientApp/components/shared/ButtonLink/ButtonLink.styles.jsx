import styled from 'styled-components';
import { darken } from 'polished';

const Wrapper = styled.a`
  ${({ isTextLink }) => !isTextLink && 'display: flex;'}
  ${({ isTextLink }) => !isTextLink && 'justify-content: center;'}
  ${({ isTextLink }) => !isTextLink && 'border-radius: .25rem;'}
  ${({ isTextLink }) => !isTextLink && 'padding: .5rem 1rem;'}
  ${({ theme, isTextLink }) => !isTextLink && `background-color: ${theme.colours.button_link_colour_highlight};`}
  ${({ theme, isTextLink }) => `color: ${isTextLink ? theme.colours.global_content_primary : 'black'};`}
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    ${({ theme, isTextLink }) => `${isTextLink ? 'color' : 'background-color'}: ${darken(0.15, theme.colours.button_link_colour_highlight)};`}
  }

  &:active {
    ${({ theme, isTextLink }) => `${isTextLink ? 'color' : 'background-color'}: ${darken(0.25, theme.colours.button_link_colour_highlight)};`}
  }
`;

export default { Wrapper };
