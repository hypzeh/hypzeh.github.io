import React from 'react';
import styled from 'styled-components';

import Page from '../Page';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading = styled.h1`
  margin: 0;
  line-height: normal;
  font-size: 150%;
`;

const Paragraph = styled.p`
  width: 100%;
  margin: 0;
  margin-top: .5rem;
  line-height: normal;
  font-size: 100%;
`;

const AboutDisplay = () => (
  <Page title="About">
    <Section>
      <Heading>About Nick Smirnoff</Heading>
      <Paragraph>
        {'Dedicated, innovative, motivated individual inspired to be part of the mould that will shape the limitless potential of the future through technology.'}
      </Paragraph>
      <Paragraph>
        {'Always looking to gain greater experience and knowledge in a range of settings relating to content creation and development.'}
      </Paragraph>
    </Section>
  </Page>
);

export default AboutDisplay;
