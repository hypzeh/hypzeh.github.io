import React from 'react';

import Page, { PageHeader, PageSection } from '../../shared/Page';
import Title from '../../shared/Title';
import Experience from './components/Experience';

const AboutDisplay = () => (
  <Page title="About">
    <PageHeader>
      <Title title="NICK SMIRNOFF" />
    </PageHeader>
    <PageSection>
      <h2>Experience</h2>
      <Experience />
    </PageSection>
  </Page>
);

export default AboutDisplay;
