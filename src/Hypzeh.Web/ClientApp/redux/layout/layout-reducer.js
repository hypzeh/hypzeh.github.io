import { LAYOUT_SET, LAYOUT_SIDEBAR_COLLAPSED_SET } from './layout-types';
import defaultState from './layout-state';

export default (state = defaultState, action) => {
  switch (action.type) {
    case LAYOUT_SET:
      return ({
        ...state,
        ...action.payload,
        header: { ...state.header, ...action.payload.header },
        navbar: { ...state.navbar, ...action.payload.navbar },
        sidebar: { ...state.sidebar, ...action.payload.sidebar },
      });

    case LAYOUT_SIDEBAR_COLLAPSED_SET:
      return ({
        ...state,
        sidebar: { ...state.sidebar, collapsed: action.payload },
      });

    default:
      return state;
  }
};
