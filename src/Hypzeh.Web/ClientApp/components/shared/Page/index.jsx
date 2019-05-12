import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';
import PageFooter from './components/PageFooter';

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
};

const Page = ({ children, title }) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </React.Fragment>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
export {
  PageHeader,
  PageContent,
  PageFooter,
};
