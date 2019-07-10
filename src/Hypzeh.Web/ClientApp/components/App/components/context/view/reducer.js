import { PANEL_CLOSE, PANEL_OPEN } from './types';

export const initialState = {
  isPanelOpen: true,
};

const reducer = (state = initialState, action) => {
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
