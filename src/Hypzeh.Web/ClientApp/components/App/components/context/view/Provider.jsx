import React, { useReducer } from 'react';

import types from '../../../types';
import reducer, { initialState } from './reducer';
import Context from './Context';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Provider = ({ children }) => {
  const [view, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ view, dispatch }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = propTypes;
Provider.defaultProps = defaultProps;

export default Provider;
