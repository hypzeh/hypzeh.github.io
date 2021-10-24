import React from 'react';

import Switcher from '../Switcher';
import areas from '~components/areas';

const AppRouter = () => (
  <Switcher routes={areas} />
);

export default AppRouter;
