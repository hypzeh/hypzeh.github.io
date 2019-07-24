import React from 'react';

import { Page, Title } from '../../../shared';
import Profile from './components/Profile';

const About = () => (
  <Page title="About">
    <Title text="About" />
    <Profile />
  </Page>
);

export default About;
