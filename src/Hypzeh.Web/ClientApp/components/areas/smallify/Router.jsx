import React from 'react';

import SmallifySidebar from './SmallifySidebar';
import Switcher from '~components/routing/Switcher';
import pages from './pages';

const Router = () => (
  <>
    <SmallifySidebar />
    <Switcher routes={pages} />
  </>
);

export default Router;
