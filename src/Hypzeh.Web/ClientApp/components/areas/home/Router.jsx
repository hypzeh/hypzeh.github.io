import React from 'react';

import HomeSidebar from './HomeSidebar';
import Switcher from '~components/routing/Switcher';
import pages from './pages';

const Router = () => (
  <>
    <HomeSidebar />
    <Switcher routes={pages} />
  </>
);

export default Router;
