import React from 'react';
import PropTypes from 'prop-types';

import { ViewProvider } from './view';
import { NavigationProvider } from './navigation';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const RootProvider = ({ children }) => (
  <NavigationProvider>
    <ViewProvider>
      {children}
    </ViewProvider>
  </NavigationProvider>
);

RootProvider.propTypes = propTypes;

export default RootProvider;
