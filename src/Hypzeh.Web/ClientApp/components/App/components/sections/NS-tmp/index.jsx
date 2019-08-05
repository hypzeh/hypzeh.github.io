import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Loader } from '../../shared';

const Router = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        path="/"
        exact
        component={React.lazy(() => import(/* webpackChunkName: "ns-home" */ './components/Home'))}
      />
      <Route
        path="/about"
        exact
        component={React.lazy(() => import(/* webpackChunkName: "ns-about" */ './components/About'))}
      />
    </Switch>
  </Suspense>
);

export default Router;
