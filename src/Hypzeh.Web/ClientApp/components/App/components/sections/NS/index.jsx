import React from 'react';

import { Main, Panel } from '../../layout';
import Navigation from './components/Navigation';
import Router from './components/Router';

const NS = () => (
  <Main>
    <Panel>
      <Navigation />
    </Panel>
    <Router />
  </Main>
);

export default NS;