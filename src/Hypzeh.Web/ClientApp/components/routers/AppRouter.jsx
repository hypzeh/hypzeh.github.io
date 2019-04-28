import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../layout/AppHeader';
import AppMain from '../layout/AppMain';
import AppFooter from '../layout/AppFooter';
import { HomeDisplay, AboutDisplay, ProjectsDisplay } from '../pages';

const AppRouter = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Switch>
        <Route exact path="/" component={HomeDisplay} />
        <Route exact path="/about" component={AboutDisplay} />
        <Route exact path="/projects" component={ProjectsDisplay} />
        <Route path="*" render={() => <h1>NOT FOUND.</h1>} />
      </Switch>
    </AppMain>
    <AppFooter />
  </BrowserRouter>
);

export default AppRouter;
