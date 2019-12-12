import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '../../shared/Loader';
import Page from '../../layout/Page';
import ErrorBoundary from './ErrorBoundary';

const propTypes = {
};

const AppRouter = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/">
          <Page title="Home">
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
            <h1>Home</h1>
          </Page>
        </Route>
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

AppRouter.propTypes = propTypes;

export default AppRouter;
