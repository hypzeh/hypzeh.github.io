import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../layout/AppHeader';
import AppMain from '../layout/AppMain';
import AppFooter from '../layout/AppFooter';
import {
  HomeDisplay,
  AboutDisplay,
  ProjectsDisplay,
  Error,
} from '../pages';

const AppRouter = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Switch>
        <Route exact path="/" component={HomeDisplay} />
        <Route exact path="/about" component={AboutDisplay} />
        <Route exact path="/projects" component={ProjectsDisplay} />
        <Route exact path="/error" render={({ history }) => <Error goBack={history.goBack} />} />
        <Route path="*" render={({ history }) => <Error code={404} message="Page not found..." goBack={history.goBack} />} />
      </Switch>
    </AppMain>
    <AppFooter />
  </BrowserRouter>
);

export default AppRouter;
