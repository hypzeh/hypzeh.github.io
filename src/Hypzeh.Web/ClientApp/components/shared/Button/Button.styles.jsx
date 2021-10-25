import styled from 'styled-components';

import variants from './variants';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_background_colour,
    [variants.OUTLINE]: theme.colours.button_outline_background_colour,
    [variants.DANGER]: theme.colours.button_danger_background_colour,
  })[variant]};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_border_colour,
    [variants.OUTLINE]: theme.colours.button_outline_border_colour,
    [variants.DANGER]: theme.colours.button_danger_border_colour,
  })[variant]};
  border-color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_border_colour,
    [variants.OUTLINE]: theme.colours.button_outline_border_colour,
    [variants.DANGER]: theme.colours.button_danger_border_colour,
  })[variant]};
  border-radius: 3px;
  height: 2rem;
  color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_colour,
    [variants.OUTLINE]: theme.colours.button_outline_colour,
    [variants.DANGER]: theme.colours.button_danger_colour,
  })[variant]};
  padding: 0 1rem;
  text-decoration: none;
  user-select: none;

  &:disabled {
    background-color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_background_colour_disabled,
    [variants.OUTLINE]: theme.colours.button_outline_background_colour_disabled,
    [variants.DANGER]: theme.colours.button_danger_background_colour_disabled,
  })[variant]};
    color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_colour_disabled,
    [variants.OUTLINE]: theme.colours.button_outline_colour_disabled,
    [variants.DANGER]: theme.colours.button_danger_colour_disabled,
  })[variant]};
  }

  &:not(:disabled).active,
  &:not(:disabled):hover {
    background-color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_background_colour_hover,
    [variants.OUTLINE]: theme.colours.button_outline_background_colour_hover,
    [variants.DANGER]: theme.colours.button_danger_background_colour_hover,
  })[variant]};
    border-color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_border_colour_hover,
    [variants.OUTLINE]: theme.colours.button_outline_border_colour_hover,
    [variants.DANGER]: theme.colours.button_danger_border_colour_hover,
  })[variant]};
    color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.button_colour_hover,
    [variants.OUTLINE]: theme.colours.button_outline_colour_hover,
    [variants.DANGER]: theme.colours.button_danger_colour_hover,
  })[variant]};
    text-decoration: none;
    cursor: pointer;
  }
`;

export default { Wrapper };
