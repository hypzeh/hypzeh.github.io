import React from 'react';

import { withPageMetadata } from '../../shared/PageMetadata';

const metadata = {
  title: 'Home',
  description: '',
};

const HomeDisplay = () => (
  <section>
    <div>Software Engineer</div>
    <div>Nick Smirnoff</div>
  </section>
);

export default withPageMetadata(metadata)(HomeDisplay);
