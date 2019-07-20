import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './utils/style/global-style';
import { PRIMARY } from './utils/style/variables';
import { ViewProvider } from './contexts/view';
import { NavigationProvider } from './contexts/navigation';
import { Main, Navbar } from './components/layout';
import Router from './components/Router';

const Container = styled.div`
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  background-color: ${PRIMARY.background};
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
      <ViewProvider>
        <NavigationProvider>
          <Container>
            <Navbar />
            <Main>
              <Router />
            </Main>
          </Container>
        </NavigationProvider>
      </ViewProvider>
    </BrowserRouter>
  );
};

export default hot(App);
