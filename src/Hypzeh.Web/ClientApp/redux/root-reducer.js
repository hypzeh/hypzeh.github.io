import { combineReducers } from 'redux';

import layoutReducer from './layout/layout-reducer';
import themeReducer from './theme/theme-reducer';

const rootReducer = combineReducers({
  layout: layoutReducer,
  theme: themeReducer,
});

export default rootReducer;
