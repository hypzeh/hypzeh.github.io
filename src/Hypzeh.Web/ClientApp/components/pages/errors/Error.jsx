import React from 'react';
import { Helmet } from 'react-helmet';

import { propTypes, defaultProps } from '../../../types/pages/error';

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

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
