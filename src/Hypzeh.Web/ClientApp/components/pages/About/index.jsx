import React from 'react';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';
import Experience from './components/Experience';

const AboutDisplay = () => (
  <Page title="About">
    <Header>
      <Title title="NICK SMIRNOFF" />
    </Header>
    <Section>
      <h2>Experience</h2>
      <Experience />
    </Section>
  </Page>
);

export default AboutDisplay;
