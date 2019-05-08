import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Page = ({ children, title }) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </React.Fragment>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Page;
