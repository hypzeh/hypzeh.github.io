import React from 'react';

import Styles from './Home.styles';
import Introduction from './Introduction';
import Page from '~components/layout/Page';
import Title from '~components/shared/Title';
import Section from '~components/layout/Section';
import greeting from './greeting';

const Home = () => (
  <Page title="Home" hideHeading>
    <Styles.Wrapper>
      <Title text={greeting} />
      <Section>
        <Introduction />
      </Section>
    </Styles.Wrapper>
  </Page>
);

export default Home;
