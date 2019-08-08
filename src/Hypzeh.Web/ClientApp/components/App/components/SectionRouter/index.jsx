import React, { useEffect, useContext, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

import { NavigationContext, navigationActions } from '../../contexts/navigation';
import { Loader } from '../shared';
import ErrorBoundary from './components/ErrorBoundary';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const SectionRouter = ({ location }) => {
  const [{ sections }, dispatch] = useContext(NavigationContext);

  useEffect(() => {
    const section = sections.find(item => item.defaultPath === `/${location.pathname.split('/', 2)[1]}`);
    if (!section) return;

    dispatch(navigationActions.setActiveSection(section));
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Switch>
          {sections.map(section => (
            <Route
              key={section.defaultPath}
              path={section.defaultPath}
              component={section.component}
            />
          ))}
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

SectionRouter.propTypes = propTypes;

export default withRouter(SectionRouter);
