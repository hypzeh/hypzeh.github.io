import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import history from './lib/history';
import sw from './lib/service-worker';
import Navbar from './components/layout/Navbar';
import Routing from './components/layout/Routing';

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 0;
  overflow: hidden;
`;

const App = () => {
  sw.register();

  return (
    <Wrapper>
      <Helmet titleTemplate="%s / Nick Smirnoff" defaultTitle="Nick Smirnoff" />
      <GlobalStyle />
      <Router history={history}>
        <Navbar />
        <Routing />
      </Router>
    </Wrapper>
  );
};

export default hot(App);
