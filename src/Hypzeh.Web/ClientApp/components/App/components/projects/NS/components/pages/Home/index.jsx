import React from 'react';

import { Page } from '../../../../../layout';
import { Title } from '../../../../../shared';

const greetings = [
  'WELCOME',
  'HELLO',
  'HI',
  'HEY',
  'HIYA!',
];

const Home = () => (
  <Page title="Home">
    <Title text={greetings[Math.floor(Math.random() * greetings.length)]} />
  </Page>
);

export default Home;
