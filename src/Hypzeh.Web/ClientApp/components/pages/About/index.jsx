import React from 'react';

import Page, { PageHeader, PageSection } from '../../shared/Page';
import Title from '../../shared/Title';
import Content from './components/Content';

const AboutDisplay = () => (
  <Page title="About">
    <PageHeader>
      <Title title="NICK SMIRNOFF" />
    </PageHeader>
    <PageSection>
      <Content />
    </PageSection>
  </Page>
);

export default AboutDisplay;
