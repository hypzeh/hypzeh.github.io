import React from 'react';
import PropTypes from 'prop-types';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';
import Message from './components/Message';

const propTypes = {
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

const Error = ({ code, title, message }) => (
  <Page name={title}>
    <Header>
      <Title title={code} />
    </Header>
    <Section>
      <Message message={message} />
    </Section>
  </Page>
);

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
