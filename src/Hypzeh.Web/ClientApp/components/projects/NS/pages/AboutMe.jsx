import React from 'react';
import styled from 'styled-components';

import { Page } from '../../../layout';
import { Title } from '../../../shared';

const Section = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Text = styled.p``;

const AboutMe = () => (
  <Page title="About Me">
    <Title text="About Me" />
    <Section>
      <Text>Test.</Text>
    </Section>
  </Page>
);

export default AboutMe;
