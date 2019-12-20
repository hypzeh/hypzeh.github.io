import React from 'react';
import styled from 'styled-components';

import Title from '../../../shared/Title';
import Section from '../../../shared/Section';
import Summary from './Summary';
import Terminal from './Terminal';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AboutMe = () => (
  <Wrapper>
    <Title text="ABOUT ME" />
    <Section>
      <Summary />
    </Section>
    <Section>
      <Terminal />
    </Section>
  </Wrapper>
);

export default AboutMe;
