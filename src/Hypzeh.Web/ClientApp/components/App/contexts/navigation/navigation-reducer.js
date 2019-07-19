import { SET_DEFAULT, SET_NAVIGATION } from './navigation-types';

const reducer = (state, action) => {
  switch (action.type) {
  case SET_NAVIGATION:
    return { ...action.payload };

  case SET_DEFAULT:
    return { ...action.payload };

  default:
    return state;
  }
};

export default reducer;
