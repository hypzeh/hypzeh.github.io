import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { Loader } from '../../shared';

const propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
};

const PageRouter = ({ pages }) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {pages.map(route => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </Suspense>
);

PageRouter.propTypes = propTypes;

export default PageRouter;
