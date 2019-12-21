import { SHOW_PAGES_PANEL, HIDE_PAGES_PANEL } from './view-types';

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_PAGES_PANEL:
      return { ...state, isPagesPanelVisible: true };

    case HIDE_PAGES_PANEL:
      return { ...state, isPagesPanelVisible: false };

    default:
      return { ...state };
  }
};

export default reducer;
