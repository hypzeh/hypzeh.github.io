import React from 'react';

import { internal, external } from './utils/routing';
import { Main, Panel, PageNavbar } from '../../layout';
import { PageRouter } from '../../routers';

const NS = () => (
  <Main>
    <Panel>
      <PageNavbar pages={internal} external={external} />
    </Panel>
    <PageRouter pages={internal} />
  </Main>
);

export default NS;
