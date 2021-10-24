import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Styles from './SplashScreen.styles';
import BaseLoader from './BaseLoader';
import Button from '~components/shared/Button';
import SplashScreenError from './SplashScreenError';

const propTypes = {
  task: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onError: PropTypes.func,
};

const defaultProps = {
  onError: (error) => (error instanceof SplashScreenError) && error.handle(),
};

const SplashScreen = ({
  task,
  title,
  onComplete,
  onError,
}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [status, setStatus] = useState({ message: '<MESSAGE>' });
  const [actions, setActions] = useState([]);

  return (
    <BaseLoader showLoader={showLoader} title={title}>
      {actions.length > 0 && (
        <Styles.Actions>
          {actions.map(({ text, onClick }) => (
            <Button key={text.key || text} text={text} onClick={onClick} />
          ))}
        </Styles.Actions>
      )}
    </BaseLoader>
  );
};

SplashScreen.propTypes = propTypes;
SplashScreen.defaultProps = defaultProps;

export default SplashScreen;
