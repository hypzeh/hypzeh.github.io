import React from 'react';

import { internal } from './utils/routing';
import { Main, Panel } from '../../layout';
import { PageRouter } from '../../routers';
import Navigation from './components/Navigation';

const Smallify = () => (
  <Main>
    <Panel>
      <Navigation />
    </Panel>
    <PageRouter pages={internal} />
  </Main>
);

export default Smallify;
