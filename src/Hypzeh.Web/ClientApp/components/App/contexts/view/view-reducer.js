import { PANEL_CLOSE, PANEL_OPEN } from './view-types';

const reducer = (state, action) => {
  switch (action.type) {
  case PANEL_OPEN:
    return { ...state, isPanelOpen: true };
  case PANEL_CLOSE:
    return { ...state, isPanelOpen: false };
  default:
    return state;
  }
};

export default reducer;
