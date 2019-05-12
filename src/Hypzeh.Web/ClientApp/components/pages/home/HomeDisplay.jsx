import React from 'react';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Page from '../Page';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import { PRIMARY } from '../../../styles/variables';


const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  color: ${PRIMARY.colour};
`;

const HomeDisplay = () => (
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
  </Page>
);

export default HomeDisplay;
