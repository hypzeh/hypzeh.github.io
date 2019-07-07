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

const AppOne = styled.div`
  border: 3px solid blue;
  position: relative;
  flex: 1 1 auto;
  z-index: auto;
`;

const AppTwo = styled.div`
  border: 3px solid green;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  contain: layout;
  flex-direction: column;
  display: flex;
`;

const Layers = styled.div`
  border: 3px solid yellow;
  background: #36393f;
  min-height: 1px;
  position: relative;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
  display: flex;
`;

const Layer = styled.div`
  border: 3px solid red;
  background: #36393f;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  border: 3px solid white;
  flex: 1 1 auto;
  background-color: #202225;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
  min-height: 0;
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
      <AppOne>
        <AppTwo>
          <Layers>
            <Layer>
              <Flex>
                <Navbar />
                <Main>
                  <Panel />
                  <Page />
                </Main>
              </Flex>
            </Layer>
          </Layers>
        </AppTwo>
      </AppOne>
    </BrowserRouter>
  );
};

export default hot(App);
