import { SET_DEFAULT, SET_NAVIGATION } from './navigation-types';
import navigation from '../../utils/navigation';

const setDefault = () => ({ type: SET_DEFAULT });

const setNavigationFromPath = (defaultPath) => {
  const section = navigation.find(item => item.defaultPath === defaultPath);
  if (!section) return setDefault();

  return ({ type: SET_NAVIGATION, payload: section });
};

export default {
  setDefault,
  setNavigationFromPath,
};
