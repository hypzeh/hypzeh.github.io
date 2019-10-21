import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { Loader } from '../../shared';
import ErrorBoundary from './components/ErrorBoundary';

const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      defaultPath: PropTypes.string.isRequired,
      component: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
};

const ProjectRouter = ({ projects }) => (
  <ErrorBoundary>
    <Suspense fallback={<Loader />}>
      <Switch>
        {projects.map(({ defaultPath, component }) => (
          <Route
            key={defaultPath}
            path={defaultPath}
            component={component}
          />
        ))}
        <Route path="/" component={lazy(() => import(/* webpackChunkName: "ns" */ '../../projects/NS'))} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

ProjectRouter.propTypes = propTypes;

export default ProjectRouter;
