import React from 'react';
import styled from 'styled-components';

import Page from '../../shared/Page';
import Title from './components/Title';
import Content from './components/Content';

const PageHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PageSection = styled.section`
  border: 0px solid green;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: rgba(33,33,33,.95);
  padding: 0 1rem;
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
        <Content />
      </PageSection>
    </Page>
  );
};

export default Home;
