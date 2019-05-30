import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';

import 'modern-normalize/modern-normalize.css';

import GlobalStyle from './styles/globalStyle';
import AppRouter from './components/routers/AppRouter';

const App = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        // eslint-disable-next-line no-console
        console.log('SW registered:', registration);
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('SW registration failed:', error);
      });
    });
  }

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s / Nick Smirnoff" defaultTitle="Nick Smirnoff" />
      <GlobalStyle />
      <AppRouter />
    </React.Fragment>
  );
};

export default hot(App);
