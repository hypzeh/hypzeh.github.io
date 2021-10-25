import React from 'react';

import Page from '~components/layout/Page';
import layouts from '~redux/layout/layouts';

const NotFound = () => (
  <Page title="Not Found" layout={layouts.FULLSCREEN.name} hideHeading>
    <h1>404</h1>
    <i>This page does not exist.</i>
  </Page>
);

export default NotFound;
