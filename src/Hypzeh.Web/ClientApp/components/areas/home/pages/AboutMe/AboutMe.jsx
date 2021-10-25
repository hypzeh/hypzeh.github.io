import React from 'react';

import Styles from './AboutMe.styles';
import Terminal from './Terminal';
import Page from '~components/layout/Page';
import Title from '~components/shared/Title';
import Section from '~components/layout/Section';

const AboutMe = () => (
  <Page title="About Me" hideHeading>
    <Styles.Wrapper>
      <Title text="ABOUT ME" />
      <Section>
        <Terminal />
      </Section>
    </Styles.Wrapper>
  </Page>
);

export default AboutMe;
