import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../layout/AppHeader';
import AppMain from '../layout/AppMain';
import AppFooter from '../layout/AppFooter';
import Loading from '../shared/Loading';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ '../pages/About'));
const Projects = lazy(() => import(/* webpackChunkName: "projects" */ '../pages/Projects'));
const Error = lazy(() => import(/* webpackChunkName: "error" */ '../pages/Error'));

const AppRouter = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/error" component={Error} />
          <Route
            path="*"
            render={routeProps => (
              <Error
                {...routeProps}
                code="404"
                title="Page Not Found"
                message="The page you are looking for does not exist."
              />
            )}
          />
        </Switch>
      </Suspense>
    </AppMain>
    <AppFooter />
  </BrowserRouter>
);

export default AppRouter;
