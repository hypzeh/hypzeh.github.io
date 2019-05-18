import React from 'react';
import styled from 'styled-components';

import Page from '../../shared/Page';
import Title from './components/Title';

const PageHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PageSection = styled.section`
  border: 1px solid blue;
  flex-grow: 1;
  z-index: 1;
`;

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
        <p>Testing...</p>
      </PageSection>
    </Page>
  );
};

export default Home;
