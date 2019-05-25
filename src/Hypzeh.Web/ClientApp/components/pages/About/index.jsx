import React from 'react';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';
import Info from './components/Info';
import Experience from './components/Experience';

const AboutDisplay = () => (
  <Page title="About">
    <Header>
      <Title title="NICK SMIRNOFF" />
    </Header>
    <Section>
      <Info />
    </Section>
    <Section>
      <Experience />
    </Section>
  </Page>
);

export default AboutDisplay;
