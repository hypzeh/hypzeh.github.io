import React from 'react';

import { Main, Panel } from '../../layout';
import Navigation from './components/Navigation';
import PageRouter from './components/PageRouter';

const Smallify = () => (
  <Main>
    <Panel>
      <Navigation />
    </Panel>
    <PageRouter />
  </Main>
);

export default Smallify;
