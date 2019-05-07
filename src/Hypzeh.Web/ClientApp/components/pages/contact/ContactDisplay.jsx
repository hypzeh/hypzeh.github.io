import React from 'react';

import withPageMetadata from '../../HOC/withPageMetadata';

const metadata = {
  title: 'Contact',
  description: '',
};

const ContactDisplay = () => (
  <section>
    <div>Contact...</div>
  </section>
);

export default withPageMetadata(metadata)(ContactDisplay);
