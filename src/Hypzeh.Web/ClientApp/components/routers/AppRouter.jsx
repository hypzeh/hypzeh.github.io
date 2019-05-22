import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../layout/AppHeader';
import AppMain from '../layout/AppMain';
import AppFooter from '../layout/AppFooter';
import Loading from '../shared/Loading';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ '../pages/About'));
const Projects = lazy(() => import(/* webpackChunkName: "projects" */ '../pages/Projects'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ '../pages/Contact'));
const Error = lazy(() => import(/* webpackChunkName: "error" */ '../pages/errors/Error'));

const AppRouter = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/error" render={({ history }) => <Error goBack={history.goBack} />} />
          <Route path="*" render={({ history }) => <Error code={404} message="Page not found..." goBack={history.goBack} />} />
        </Switch>
      </Suspense>
    </AppMain>
    <AppFooter />
  </BrowserRouter>
);

export default AppRouter;
