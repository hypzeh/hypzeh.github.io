import React from 'react';

import types from '../../../types';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.log(error, info);
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;

    if (!hasError) return children;

    return (
      <div>
        <h1>Something went wrong..</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

ErrorBoundary.propTypes = propTypes;
ErrorBoundary.defaultProps = defaultProps;

export default ErrorBoundary;
