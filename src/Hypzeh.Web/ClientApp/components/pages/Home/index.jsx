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

const Home = () => (
  <Page title="Home">
    <PageHeader>
      <Title />
    </PageHeader>
  </Page>
);

export default Home;
