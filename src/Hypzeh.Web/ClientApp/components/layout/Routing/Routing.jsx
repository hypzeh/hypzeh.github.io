import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import SmallifyRouter from '../../projects/smallify/Router';
import NSRouter from '../../projects/ns/Router';

const Routing = () => (
  <ErrorBoundary>
    <Switch>
      <Route path="/project/smallify">
        <SmallifyRouter />
      </Route>

      <Route path="/">
        <NSRouter />
      </Route>
    </Switch>
  </ErrorBoundary>
);

export default Routing;
