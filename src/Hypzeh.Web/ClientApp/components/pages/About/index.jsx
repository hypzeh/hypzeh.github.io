import React from 'react';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';
import Profile from './components/Profile';
import Experience from './components/Experience';

const AboutDisplay = () => (
  <Page title="About">
    <Header>
      <Title title="NICK SMIRNOFF" />
    </Header>
    <Section>
      <Profile />
    </Section>
    <Section>
      <Experience />
    </Section>
  </Page>
);

export default AboutDisplay;
