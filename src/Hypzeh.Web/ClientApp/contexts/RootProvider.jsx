import React from 'react';
import PropTypes from 'prop-types';

import { ViewProvider } from './view';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const RootProvider = ({ children }) => (
  <ViewProvider>
    {children}
  </ViewProvider>
);

RootProvider.propTypes = propTypes;

export default RootProvider;
