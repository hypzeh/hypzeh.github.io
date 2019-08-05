import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Loader } from '../../shared';

const Router = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        path="/smallify"
        exact
        component={React.lazy(() => import(/* webpackChunkName: "smallify-home" */ './components/Home'))}
      />
      <Route
        path="/smallify/screenshots"
        exact
        component={React.lazy(() => import(/* webpackChunkName: "smallify-screenshots" */ './components/Screenshots'))}
      />
    </Switch>
  </Suspense>
);

export default Router;
