import { SHOW_PAGES_PANEL, HIDE_PAGES_PANEL } from './view-types';

const showPagesPanel = () => ({ type: SHOW_PAGES_PANEL });
const hidePagesPanel = () => ({ type: HIDE_PAGES_PANEL });

export default {
  showPagesPanel,
  hidePagesPanel,
};
