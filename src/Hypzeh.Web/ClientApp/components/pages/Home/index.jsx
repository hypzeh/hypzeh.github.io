import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';

import { PRIMARY } from '../../../styles/variables';
import Page from '../../shared/Page';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  color: ${PRIMARY.colour};
`;

const Home = () => (
  <Page title="Home">
    <Page.Header>
      <Typist cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }}>
        <Typist.Delay ms={500} />
        <span>NICK SMIRNOFF</span>
        <Typist.Delay ms={600} />
      </Typist>
    </Page.Header>
    <Page.Content>
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
    </Page.Content>
    <Page.Footer>
      <span>Footer</span>
    </Page.Footer>
  </Page>
);

export default Home;
