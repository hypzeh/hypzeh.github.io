import React from 'react';
import { hot } from 'react-hot-loader/root';

import 'modern-normalize/modern-normalize.css';

import GlobalStyle from './styles/globalStyle';
import AppRouter from './components/routers/AppRouter';

const App = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('SW registered:', registration);
      }).catch((error) => {
        console.log('SW registration failed:', error);
      });
    });
  }

  return (
    <React.Fragment>
      <GlobalStyle />
      <AppRouter />
    </React.Fragment>
  );
};

export default hot(App);
