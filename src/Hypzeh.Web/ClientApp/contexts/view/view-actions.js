import { PANEL_CLOSE, PANEL_OPEN, PANEL_TOGGLE } from './view-types';

const closePanel = () => ({ type: PANEL_CLOSE });
const openPanel = () => ({ type: PANEL_OPEN });
const togglePanel = () => ({ type: PANEL_TOGGLE });

export default {
  closePanel,
  openPanel,
  togglePanel,
};
