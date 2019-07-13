import { PANEL_CLOSE, PANEL_OPEN } from './view-types';

const closePanel = () => ({ type: PANEL_CLOSE });

const openPanel = () => ({ type: PANEL_OPEN });

export default {
  closePanel,
  openPanel,
};
