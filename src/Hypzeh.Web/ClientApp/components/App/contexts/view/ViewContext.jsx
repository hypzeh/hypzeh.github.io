import React, { useReducer } from 'react';

import types from '../../types';
import reducer from './view-reducer';
import state from './view-state';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const ViewContext = React.createContext(state);

const ViewProvider = ({ children }) => {
  const [view, dispatch] = useReducer(reducer, state);

  return (
    <ViewContext.Provider value={{ view, dispatch }}>
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = propTypes;
ViewProvider.defaultProps = defaultProps;

export { ViewContext, ViewProvider };
