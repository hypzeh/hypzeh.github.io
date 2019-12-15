import React, { Suspense, lazy, useContext } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { NavigationContext, navigationActions } from '../../../contexts/navigation';
import Loader from '../../shared/Loader';
import Page from '../../layout/Page';

const Home = lazy(() => import(/* webpackChunkName: "ns-home" */ './Home'));
const AboutMe = lazy(() => import(/* webpackChunkName: "ns-about-me" */ './AboutMe'));
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
          <Page title="Home">
            <Home />
          </Page>
        </Route>

        <Route exact path={`${path}about-me`}>
          <Page title="About Me">
            <AboutMe />
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
