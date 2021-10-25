import { LAYOUT_SET, LAYOUT_SIDEBAR_COLLAPSED_SET } from './layout-types';
import layouts from './layouts';

export const setLayout = (name) => ({
  type: LAYOUT_SET,
  payload: layouts[name] ?? layouts.DEFAULT,
});

export const setSidebarCollapsedState = (state) => ({
  type: LAYOUT_SIDEBAR_COLLAPSED_SET,
  payload: state,
});
