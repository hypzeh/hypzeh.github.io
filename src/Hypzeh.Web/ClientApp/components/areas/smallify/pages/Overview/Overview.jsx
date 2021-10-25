import React from 'react';

import Styles from './Overview.styles';
import Download from './Download';
import Summary from './Summary';
import OpenSource from './OpenSource';
import Page from '~components/layout/Page';
import Title from '~components/shared/Title';
import Section from '~components/layout/Section';

const Overview = () => (
  <Page title="Overview" hideHeading>
    <Styles.Wrapper>
      <Title text="Smallify" />
      <Section>
        <Download />
      </Section>
      <Section>
        <Summary />
      </Section>
      <Section>
        <OpenSource />
      </Section>
    </Styles.Wrapper>
  </Page>
);

export default Overview;
