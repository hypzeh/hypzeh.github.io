import React, { useReducer } from 'react';

import types from '../../types';
import reducer from './navigation-reducer';
import state from './navigation-state';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const NavigationContext = React.createContext(state);

const NavigationProvider = ({ children }) => {
  const [navigation, dispatch] = useReducer(reducer, state);

  return (
    <NavigationContext.Provider value={{ navigation, dispatch }}>
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = propTypes;
NavigationProvider.defaultProps = defaultProps;

export { NavigationContext, NavigationProvider };
