import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../layout/AppHeader';
import AppMain from '../layout/AppMain';

const AppRouter = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Switch>
        <Route exact path='/' render={() => <h1>Home.</h1>} />
      </Switch>
    </AppMain>
  </BrowserRouter>
);

export default AppRouter;
