import React from 'react';

import { propTypes, defaultProps } from '../../../types/pages/error';

const Error = ({ code, message, goBack }) => (
  <section>
    <div>{code}</div>
    <div>{message}</div>
    {goBack && <button type="button" onClick={goBack}>Back</button>}
  </section>
);

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
