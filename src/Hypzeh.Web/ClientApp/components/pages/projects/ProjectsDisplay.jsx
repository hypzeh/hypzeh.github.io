import React from 'react';

import { withPageMetadata } from '../../shared/PageMetadata';

const metadata = {
  title: 'Projects',
  description: '',
};

const ProjectsDisplay = () => (
  <section>
    <div>Projects...</div>
  </section>
);

export default withPageMetadata(metadata)(ProjectsDisplay);
