import { PANEL_CLOSE, PANEL_OPEN, PANEL_TOGGLE } from './view-types';

const reducer = (state, action) => {
  switch (action.type) {
  case PANEL_OPEN:
    return { ...state, isPanelOpen: true };

  case PANEL_CLOSE:
    return { ...state, isPanelOpen: false };

  case PANEL_TOGGLE:
    return { ...state, isPanelOpen: !state.isPanelOpen };

  default:
    return { ...state };
  }
};

export default reducer;
