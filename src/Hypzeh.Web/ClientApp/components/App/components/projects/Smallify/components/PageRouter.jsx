import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { internal } from '../utils/routing';

const PageRouter = () => (
  <Switch>
    {internal.map(route => (
      <Route
        key={route.path}
        exact
        path={route.path}
        component={route.component}
      />
    ))}
  </Switch>
);

export default PageRouter;
