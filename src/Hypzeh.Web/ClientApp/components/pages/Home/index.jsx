import React from 'react';

import Page, { Header, Section } from '../../shared/Page';
import Title from '../../shared/Title';
import Introduction from './components/Introduction';

const Home = () => {
  const greetings = [
    'WELCOME',
    'HELLO',
    'HI',
    'HEY',
  ];

  return (
    <Page title="Home">
      <Header>
        <Title title={greetings[Math.floor(Math.random() * greetings.length)]} />
      </Header>
      <Section>
        <Introduction />
      </Section>
    </Page>
  );
};

export default Home;
