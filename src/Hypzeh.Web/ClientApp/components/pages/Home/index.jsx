import React from 'react';

import Page, { PageHeader, PageSection } from '../../shared/Page';
import Title from '../../shared/Title';
import Introduction from './components/Introduction';
import Information from './components/Information';

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
        <Introduction />
        <Information />
      </PageSection>
    </Page>
  );
};

export default Home;
