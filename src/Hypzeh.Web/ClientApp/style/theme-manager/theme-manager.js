import keys from './storage-keys';
import themes from '../themes';

const buildPreferences = (themeName) => ({
  themeName,
  theme: themes[themeName],
});

const getUserPreferencesOrDefault = () => {
  const themeName = localStorage.getItem(keys.THEME_NAME);
  if (!themeName) {
    localStorage.setItem(keys.THEME_NAME, 'dark');
    return buildPreferences('dark');
  }

  return buildPreferences(themeName);
};

const saveUserPreferences = (preference) => {
  const currentPreferences = getUserPreferencesOrDefault();
  if (currentPreferences.themeName !== preference.themeName) {
    localStorage.setItem(keys.THEME_NAME, preference.themeName);
  }
};

export default { getUserPreferencesOrDefault, saveUserPreferences };
