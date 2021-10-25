import { THEME_SET, THEME_SET_DARK, THEME_SET_LIGHT } from './theme-types';
import themeManager from '~style/theme-manager';

export const setDarkTheme = () => {
  themeManager.saveUserPreferences({ themeName: 'dark' });

  return ({
    type: THEME_SET_DARK,
  });
};

export const setLightTheme = () => {
  themeManager.saveUserPreferences({ themeName: 'light' });

  return ({
    type: THEME_SET_LIGHT,
  });
};

export const setTheme = (name) => {
  themeManager.saveUserPreferences({ themeName: name });

  return ({
    type: THEME_SET,
    payload: name,
  });
};
