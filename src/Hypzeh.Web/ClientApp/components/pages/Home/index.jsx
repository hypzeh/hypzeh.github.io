import React from 'react';

import Page, { PageHeader, PageSection } from '../../shared/Page';
import Title from './components/Title';
import Content from './components/Content';

const Home = () => {
  const greetings = [
    'WELCOME',
    'HELLO',
    'HI',
    'HEY',
  ];
  const title = greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <Page title="Home">
      <PageHeader>
        <Title title={title} />
      </PageHeader>
      <PageSection>
        <Content />
      </PageSection>
    </Page>
  );
};

export default Home;
