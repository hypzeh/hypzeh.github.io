import React from 'react';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';
import Profile from './components/Profile';

const AboutDisplay = () => (
  <Page title="About">
    <Header>
      <Title title="ABOUT" />
    </Header>
    <Section>
      <Profile />
    </Section>
  </Page>
);

export default AboutDisplay;
