import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import reducer from './navigation-reducer';
import state from './navigation-state';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const NavigationContext = React.createContext(state);

const NavigationProvider = ({ children }) => {
  const [navigation, dispatch] = useReducer(reducer, state);

  return (
    <NavigationContext.Provider value={[navigation, dispatch]}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = propTypes;

export { NavigationContext, NavigationProvider };
