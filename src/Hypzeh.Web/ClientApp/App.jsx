import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { Router } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import history from './lib/history';
import sw from './lib/service-worker';
import ProjectNavbar from './components/layout/ProjectNavbar';

const Wrapper = styled.div`
  border: 1px solid red;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 0;
`;

const App = () => {
  sw.register();

  return (
    <Wrapper>
      <Helmet titleTemplate="%s / Nick Smirnoff" defaultTitle="Nick Smirnoff" />
      <GlobalStyle />
      <Router history={history}>
        <ProjectNavbar projects={[]} />
      </Router>
    </Wrapper>
  );
};

export default hot(App);
