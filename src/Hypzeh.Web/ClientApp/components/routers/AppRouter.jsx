import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AppHeader from '../layout/AppHeader';
import AppMain from '../layout/AppMain';
import AppFooter from '../layout/AppFooter';

const AppRouter = () => (
  <BrowserRouter>
    <AppHeader />
    <AppMain>
      <Switch>
        <Route exact path="/" render={() => <h1>Home.</h1>} />
        <Route exact path="/about" render={() => <h1>About.</h1>} />
        <Route exact path="/projects" render={() => <h1>Projects.</h1>} />
        <Route exact path="/contact" render={() => <h1>Contact.</h1>} />
        <Route path="*" render={() => <h1>NOT FOUND.</h1>} />
      </Switch>
    </AppMain>
    <AppFooter />
  </BrowserRouter>
);

export default AppRouter;
