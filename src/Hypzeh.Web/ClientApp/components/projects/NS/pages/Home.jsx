import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../../../utils/style/variables';
import random from '../../../../utils/random';
import { Page } from '../../../layout';
import { Title } from '../../../shared';

const Section = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Highlight = styled.strong`
  color: ${PRIMARY.highlight};
`;

const greeting = random.fromList([
  'WELCOME',
  'HELLO',
  'HI',
  'HEY',
  'HIYA!',
]);

const Home = () => (
  <Page title="Home">
    <Title text={greeting} />
    <Section>
      <h1>
        {'I\'m '}
        <Highlight>Nick Smirnoff</Highlight>
        {'.'}
      </h1>
      <h1>
        {'I\'m a full-stack developer.'}
      </h1>
    </Section>
  </Page>
);

export default Home;
