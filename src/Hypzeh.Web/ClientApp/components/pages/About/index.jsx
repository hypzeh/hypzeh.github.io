import React from 'react';

import Page, { PageHeader, PageSection } from '../../shared/Page';
import Title from '../../shared/Title';
import WorkExperience from './components/WorkExperience';

const AboutDisplay = () => (
  <Page title="About">
    <PageHeader>
      <Title title="NICK SMIRNOFF" />
    </PageHeader>
    <PageSection>
      <WorkExperience />
    </PageSection>
  </Page>
);

export default AboutDisplay;
