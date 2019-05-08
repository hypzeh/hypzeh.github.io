import React from 'react';
import PropTypes from 'prop-types';

import Page from '../Page';

const Error = ({ code, message, goBack }) => (
  <Page title="Error">
    <section>
      <div>{`[${code}] ${message}`}</div>
      {goBack && <button type="button" onClick={goBack}>Back</button>}
    </section>
  </Page>
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
