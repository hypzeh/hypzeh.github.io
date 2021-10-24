import themeManager from '~style/theme-manager';

export default {
  name: themeManager.getUserPreferencesOrDefault().themeName,
};
