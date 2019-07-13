import React, { useReducer } from 'react';

import types from '../../propTypes';
import reducer from './reducer';
import state from './state';

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
