import {
  EBONY,
  WHITE,
  BLACK,
  GRAY,
  LIGHT_GRAY,
  YELLOW,
  CINNABAR,
  DANGER,
  TRANSPARENT,
} from '../colours';
import random from '~utils/random';

const HIGHLIGHT = random.fromList([
  '#EB156C',
  '#D615EB',
  '#1571EB',
  '#15E9EB',
  '#16EB15',
  '#EBD515',
]);

const COLOURS = {
  // Ordered by component
  // A
  // B
  button_background_colour: YELLOW,
  button_background_colour_disabled: '#d9de17',
  button_background_colour_hover: '#fdf412',
  button_border_colour: YELLOW,
  button_border_colour_hover: YELLOW,
  button_colour: BLACK,
  button_colour_disabled: GRAY,
  button_colour_hover: BLACK,
  button_danger_background_colour: TRANSPARENT,
  button_danger_background_colour_disabled: CINNABAR,
  button_danger_background_colour_hover: DANGER,
  button_danger_border_colour: CINNABAR,
  button_danger_border_colour_hover: CINNABAR,
  button_danger_colour: CINNABAR,
  button_danger_colour_disabled: LIGHT_GRAY,
  button_danger_colour_hover: BLACK,
  button_outline_background_colour: TRANSPARENT,
  button_outline_background_colour_disabled: '#d9de17',
  button_outline_background_colour_hover: '#fdf412',
  button_outline_border_colour: YELLOW,
  button_outline_border_colour_hover: YELLOW,
  button_outline_colour: YELLOW,
  button_outline_colour_disabled: GRAY,
  button_outline_colour_hover: BLACK,
  // C
  // D
  // E
  // F
  // G
  global_background_primary: '#212121',
  global_content_primary: WHITE,
  global_danger: DANGER,
  // H
  home_introduction_colour_highlight: HIGHLIGHT,
  // I
  // J
  // K
  // L
  loader_background_colour: WHITE,
  // M
  // N
  navbar_background_colour: '#424242',
  navbar_link_background_colour_active: HIGHLIGHT,
  navbar_link_background_colour_hover: HIGHLIGHT,
  navbar_link_border_colour_active: HIGHLIGHT,
  navbar_link_colour: WHITE,
  navbar_link_colour_active: HIGHLIGHT,
  navbar_link_colour_hover: WHITE,
  // O
  // P
  // Q
  // R
  // S
  sidebar_background_colour: '#323232',
  sidebar_link_background_colour_active: HIGHLIGHT,
  sidebar_link_background_colour_hover: HIGHLIGHT,
  sidebar_link_colour: WHITE,
  sidebar_separator_colour: HIGHLIGHT,
  splash_screen_background_colour: EBONY,
  splash_screen_colour: WHITE,
  splash_screen_status_error_colour: DANGER,
  splash_screen_status_standard_colour: WHITE,
  splash_screen_status_warning_colour: DANGER,
  // T
  terminal_input_colour: WHITE,
  terminal_output_colour_highlight: HIGHLIGHT,
  // U
  // V
  // W
  // X
  // Y
  // Z
};

export default {
  colours: COLOURS,
};
