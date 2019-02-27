import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import AboutContainer from '../components/about/AboutContainer';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <React.Fragment>
            <h1>Home.</h1>
            <Link to="/about">About</Link>
          </React.Fragment>
        )}
      />
      <Route
        exact
        path="/about"
        component={AboutContainer}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
