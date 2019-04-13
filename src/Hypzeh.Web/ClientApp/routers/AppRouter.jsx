import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../layout/AppHeader';

const AppRouter = () => (
  <BrowserRouter>
    <AppHeader />
    <Switch>
      <Route exact path='/' render={() => <h1>Home.</h1>} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
