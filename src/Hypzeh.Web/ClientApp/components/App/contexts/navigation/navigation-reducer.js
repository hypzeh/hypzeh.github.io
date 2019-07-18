import { SET_NS } from './navigation-types';

const reducer = (state, action) => {
  switch (action.type) {
  case SET_NS:
    return { ...state };

  default:
    return state;
  }
};

export default reducer;
