import React from 'react';

import { Page, Title } from '../../../shared';
import Introduction from './components/Introduction';

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
    <Introduction />
  </Page>
);

export default Home;
