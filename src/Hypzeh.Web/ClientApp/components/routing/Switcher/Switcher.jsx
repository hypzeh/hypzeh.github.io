import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loader from '~components/shared/Loader';

const propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string,
      urls: PropTypes.arrayOf(PropTypes.string),
      disableExactMatch: PropTypes.bool,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
  fallbackRedirectToRoot: PropTypes.bool,
  fallbackRoute: PropTypes.string,
};

const defaultProps = {
  fallbackRedirectToRoot: false,
  fallbackRoute: null,
};

const Switcher = ({ routes, fallbackRedirectToRoot, fallbackRoute }) => {
  const root = (fallbackRedirectToRoot && routes.find((route) => route.root));
  const enableFallback = !!fallbackRoute || !!root;

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.id}
            exact={(!!route.urls || !!route.url) && !route.disableExactMatch}
            path={route.urls || route.url}
            component={route.component()}
          />
        ))}
        {enableFallback && (<Redirect to={fallbackRoute || root.url || root.urls[0]} />)}
      </Switch>
    </Suspense>
  );
};

Switcher.propTypes = propTypes;
Switcher.defaultProps = defaultProps;

export default Switcher;
