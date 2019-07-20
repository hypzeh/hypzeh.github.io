import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import navigation from '../../utils/navigation';
import { Loader } from '../shared';
import ErrorBoundary from './components/ErrorBoundary';

const Router = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Switch>
        {navigation.map(
          ({ internal }) => internal.map(
            ({ path, component }) => (
              <Route
                key={path}
                path={path}
                exact
                component={component}
              />
            ),
          ),
        )}
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default Router;
