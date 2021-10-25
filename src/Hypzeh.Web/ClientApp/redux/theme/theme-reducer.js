import { THEME_SET, THEME_SET_DARK, THEME_SET_LIGHT } from './theme-types';
import defaultState from './theme-state';

export default (state = defaultState, action) => {
  switch (action.type) {
    case THEME_SET:
      return { name: action.payload };

    case THEME_SET_DARK:
      return { name: 'dark' };

    case THEME_SET_LIGHT:
      return { name: 'light' };

    default:
      return state;
  }
};
