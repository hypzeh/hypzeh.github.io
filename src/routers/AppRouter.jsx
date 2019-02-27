import React from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';

import AppHeader from '../components/shared/layout/AppHeader';
import AboutContainer from '../components/about/AboutContainer';

const AppRouter = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <React.Fragment>
              <h1>Home.</h1>
              <Link to='/about'>About</Link>
            </React.Fragment>
          )}
        />
        <Route exact path='/about' component={AboutContainer} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default AppRouter;
