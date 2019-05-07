import React from 'react';
import PropTypes from 'prop-types';

import { withPageMetadata } from '../../shared/PageMetadata';

const metadata = {
  title: 'Error',
  description: '',
};

const Error = ({ code, message, goBack }) => (
  <section>
    <div>{`[${code}] ${message}`}</div>
    {goBack && <button type="button" onClick={goBack}>Back</button>}
  </section>
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

export default withPageMetadata(metadata)(Error);
