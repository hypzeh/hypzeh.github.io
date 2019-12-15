import React, { Suspense, lazy, useContext } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { NavigationContext, navigationActions } from '../../../contexts/navigation';
import Loader from '../../shared/Loader';
import Page from '../../layout/Page';

const Overview = lazy(() => import(/* webpackChunkName: "smallify-overview" */ './Overview'));
const Screenshots = lazy(() => import(/* webpackChunkName: "smallify-screenshots" */ './Screenshots'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '../../layout/Routing/NotFound'));

const NSRouter = () => {
  const { path } = useRouteMatch();
  const [{ activeProject }, navigationDispatch] = useContext(NavigationContext);
  if (activeProject.path !== path) {
    navigationDispatch(navigationActions.setActiveProjectByPath(path));
  }

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={`${path}`}>
          <Page title="Smallify - Overview">
            <Overview />
          </Page>
        </Route>

        <Route exact path={`${path}/screenshots`}>
          <Page title="Smallify - Screenshots">
            <Screenshots />
          </Page>
        </Route>

        <Route>
          <Page title="Page Not Found">
            <NotFound />
          </Page>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default NSRouter;
