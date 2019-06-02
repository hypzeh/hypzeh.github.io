import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';

const propTypes = {
  history: PropTypes.shape().isRequired,
  code: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  title: PropTypes.string,
  message: PropTypes.string,
};

const defaultProps = {
  code: 'Oops',
  title: 'Error',
  message: 'Something went wrong!',
};

const Error = ({
  history,
  code,
  title,
  message,
}) => {
  console.log(history);
  console.log(code);
  console.log(message);

  return (
    <Page name={title}>
      <Header>
        <Title title={code} />
      </Header>
      <Section>
        <p>{message}</p>
        <p>
          <button type="button" onClick={history.goBack}>Back</button>
          |
          <Link to="/">Home</Link>
        </p>
      </Section>
    </Page>
  );
};

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
