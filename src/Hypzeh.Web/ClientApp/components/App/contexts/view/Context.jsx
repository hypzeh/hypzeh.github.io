import React, { useReducer } from 'react';

import types from '../../types';
import reducer, { initialState } from './reducer';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const ViewContext = React.createContext(initialState);

const ViewProvider = ({ children }) => {
  const [view, dispatch] = useReducer(reducer, initialState);

  return (
    <ViewContext.Provider value={{ view, dispatch }}>
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = propTypes;
ViewProvider.defaultProps = defaultProps;

export { ViewContext, ViewProvider };
