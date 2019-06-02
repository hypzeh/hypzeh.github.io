import React from 'react';
import PropTypes from 'prop-types';

import Page from '../../shared/Page';

const propTypes = {
  code: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  message: PropTypes.string,
  goBack: PropTypes.func,
};

const defaultProps = {
  code: 500,
  message: 'Oops, something broke!',
  goBack: undefined,
};

const Error = ({ code, message, goBack }) => (
  <Page name="Error">
    <section>
      <div>{`[${code}] ${message}`}</div>
      {goBack && <button type="button" onClick={goBack}>Back</button>}
    </section>
  </Page>
);

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
