import { SET_ACTIVE_PROJECT } from './navigation-types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_PROJECT:
      return { ...state, activeProject: action.payload };

    default:
      return { ...state };
  }
};

export default reducer;
