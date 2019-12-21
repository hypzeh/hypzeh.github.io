import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './view-reducer';
import state from './view-state';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ViewContext = React.createContext(state);

const ViewProvider = ({ children }) => {
  const [view, dispatch] = useReducer(reducer, state);

  return (
    <ViewContext.Provider value={[view, dispatch]}>
      {children}
    </ViewContext.Provider>
  );
};

ViewProvider.propTypes = propTypes;

export { ViewContext, ViewProvider };
