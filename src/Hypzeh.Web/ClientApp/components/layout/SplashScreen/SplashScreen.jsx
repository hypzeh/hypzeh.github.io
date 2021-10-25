import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Styles from './SplashScreen.styles';
import BaseLoader from './BaseLoader';
import Status from './Status';
import Button from '~components/shared/Button';
import SplashScreenError from './errors/SplashScreenError';
import DefaultSplashScreenError from './errors/DefaultSplashScreenError';

const propTypes = {
  title: PropTypes.string.isRequired,
  task: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onError: PropTypes.func,
};

const defaultProps = {
  onError: (error) => ((error instanceof SplashScreenError) && error.handle()) || (new DefaultSplashScreenError().handle()),
};

const SplashScreen = ({
  title,
  task,
  onComplete,
  onError,
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [status, setStatus] = useState({ variant: null, message: 'Initialising...' });
  const [actions, setActions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await task();
      } catch (error) {
        const { type, message, actionHandlers } = onError(error);
        setActions(actionHandlers);
        setStatus({ variant: type.toUpperCase(), message });
        setShowLoader(false);
        return;
      }
      onComplete();
    })();
  }, [task, onComplete, onError]);

  return (
    <BaseLoader showLoader={showLoader} title={title}>
      <Status variant={status.variant} message={status.message} />
      {actions.length > 0 && (
        <Styles.Actions>
          {actions.map(({ text, onClick }) => (
            <Button key={text} text={text} onClick={onClick} />
          ))}
        </Styles.Actions>
      )}
    </BaseLoader>
  );
};

SplashScreen.propTypes = propTypes;
SplashScreen.defaultProps = defaultProps;

export default SplashScreen;
