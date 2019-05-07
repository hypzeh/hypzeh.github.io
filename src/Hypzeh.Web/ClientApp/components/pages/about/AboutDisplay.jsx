import React from 'react';

import withPageMetadata from '../../HOC/withPageMetadata';

const metadata = {
  title: 'About',
  description: '',
};

const AboutDisplay = () => (
  <section>
    <div>About...</div>
  </section>
);

export default withPageMetadata(metadata)(AboutDisplay);
