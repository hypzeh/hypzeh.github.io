import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
};

const Message = ({ history, message }) => (
  <div>
    <p>{message}</p>
    <button type="button" onClick={history.goBack}>Back</button>
  </div>
);

Message.propTypes = propTypes;

export default withRouter(Message);
