import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

export const withPageMetadata = metadata => WrappedComponent => props => (
  <React.Fragment>
    <Helmet>
      <title>{metadata.title || ''}</title>
      <meta name="description" content={metadata.description || ''} />
    </Helmet>
    <WrappedComponent {...props} />
  </React.Fragment>
);

const PageMetadata = ({ children, title, description }) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </React.Fragment>
);

PageMetadata.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageMetadata;
