import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

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

Page.Header = Header;
Page.Content = Content;
Page.Footer = Footer;

export default Page;
