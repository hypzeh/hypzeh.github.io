import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import commonPropTypes from './utils/common-prop-types';
import ThemeProvider from './style/ThemeProvider';
import GlobalStyle from './style/GlobalStyle';

const propTypes = {
  children: commonPropTypes.CHILDREN.isRequired,
};

const Providers = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        {children}
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

Providers.propTypes = propTypes;

export default Providers;
