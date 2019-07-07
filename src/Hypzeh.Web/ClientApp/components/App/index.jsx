import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './utils/style/global-style';

const Container = styled.div`
  border: 1px solid red;
  position: relative;
  flex: 1 1 auto;
`;

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
    <Container>
      <Helmet titleTemplate="%s / Nick Smirnoff" defaultTitle="Nick Smirnoff" />
      <GlobalStyle />
      <BrowserRouter />
    </Container>
  );
};

export default hot(App);
