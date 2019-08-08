import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

const propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }).isRequired,
  ).isRequired,
};

const PageRouter = ({ pages }) => (
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
);

PageRouter.propTypes = propTypes;

export default PageRouter;
