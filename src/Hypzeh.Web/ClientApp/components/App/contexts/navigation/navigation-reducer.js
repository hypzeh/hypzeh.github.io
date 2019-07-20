import { SET_DEFAULT, SET_NAVIGATION } from './navigation-types';
import defaultState from './navigation-state';

const reducer = (state, action) => {
  switch (action.type) {
  case SET_NAVIGATION:
    return { ...action.payload };

  case SET_DEFAULT:
    return defaultState;

  default:
    return state;
  }
};

export default reducer;
