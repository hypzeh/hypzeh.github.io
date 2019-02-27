import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../components/shared/layout/AppHeader';
import AboutContainer from '../components/about/AboutContainer';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path='/' render={() => <h1>Home.</h1>} />
        <Route exact path='/about' component={AboutContainer} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
