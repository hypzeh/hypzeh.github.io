import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Error = ({ code, message, goBack }) => (
  <React.Fragment>
    <Helmet>
      <title>Error</title>
    </Helmet>
    <section>
      <div>{`[${code}] ${message}`}</div>
      {goBack && <button type="button" onClick={goBack}>Back</button>}
    </section>
  </React.Fragment>
);

Error.propTypes = {
  code: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  message: PropTypes.string,
  goBack: PropTypes.func,
};
Error.defaultProps = {
  code: 500,
  message: 'Oops, something broke!',
  goBack: undefined,
};

export default Error;
