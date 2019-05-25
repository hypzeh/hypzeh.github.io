import React from 'react';

import Page, { Header, Section } from '../../shared/Page';
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
      <Header>
        <Title title={title} />
      </Header>
      <Section>
        <Introduction />
        <Information />
      </Section>
    </Page>
  );
};

export default Home;
