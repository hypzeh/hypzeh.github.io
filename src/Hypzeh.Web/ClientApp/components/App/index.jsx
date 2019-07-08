import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './utils/style/global-style';
import {
  Main,
  Navbar,
  Page,
  Panel,
} from './components/layout';

const Container = styled.div`
  border: 1px solid white;
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  background-color: #202225;
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
    <BrowserRouter>
      <Helmet titleTemplate="%s / Nick Smirnoff" defaultTitle="Nick Smirnoff" />
      <GlobalStyle />
      <Container>
        <Navbar />
        <Main>
          <Panel />
          <Page />
        </Main>
      </Container>
    </BrowserRouter>
  );
};

export default hot(App);
