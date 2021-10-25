import React from 'react';

import Switcher from '~components/routing/Switcher';
import pages from './pages';

const Router = () => (
  <Switcher routes={pages} />
);

export default Router;
