import React from 'react';

import Page, { PageHeader, PageSection } from '../../shared/Page';
import Title from '../../shared/Title';
import WorkHistory from './components/WorkHistory';

const AboutDisplay = () => (
  <Page title="About">
    <PageHeader>
      <Title title="NICK SMIRNOFF" />
    </PageHeader>
    <PageSection>
      <WorkHistory />
    </PageSection>
  </Page>
);

export default AboutDisplay;
