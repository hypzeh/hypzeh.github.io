import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';

import { PRIMARY } from '../../../styles/variables';
import Page, { PageHeader, PageContent, PageFooter } from '../../shared/Page';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  color: ${PRIMARY.colour};
`;

const Home = () => (
  <Page title="Home">
    <PageHeader>
      <Typist cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }}>
        <Typist.Delay ms={500} />
        <span>NICK SMIRNOFF</span>
        <Typist.Delay ms={600} />
      </Typist>
    </PageHeader>
    <PageContent>
      <Section>
        <Typist cursor={{ element: '_' }}>
          <Typist.Delay ms={600} />
          <span>Software Engineer.</span>
          <Typist.Backspace count={18} delay={5000} />
          <span>Check out my </span>
          <Link to="/projects">projects</Link>
          <span>.</span>
        </Typist>
      </Section>
    </PageContent>
    <PageFooter>
      <span>Footer</span>
    </PageFooter>
  </Page>
);

export default Home;
