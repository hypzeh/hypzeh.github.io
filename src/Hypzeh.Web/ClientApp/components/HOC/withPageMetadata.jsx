import React from 'react';
import { Helmet } from 'react-helmet';

const withPageMetadata = metadata => WrappedComponent => props => (
  <React.Fragment>
    <Helmet>
      <title>{metadata.title || ''}</title>
      <meta name="description" content={metadata.description || ''} />
    </Helmet>
    <WrappedComponent {...props} />
  </React.Fragment>
);

export default withPageMetadata;
