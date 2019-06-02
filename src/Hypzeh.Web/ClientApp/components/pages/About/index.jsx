import React from 'react';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';
import Profile from './components/Profile';

const AboutDisplay = () => (
  <Page name="About">
    <Header>
      <Title title="ABOUT" />
    </Header>
    <Section>
      <Profile />
    </Section>
  </Page>
);

export default AboutDisplay;
