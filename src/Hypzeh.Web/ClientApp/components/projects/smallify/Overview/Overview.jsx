import React from 'react';
import styled from 'styled-components';

import Title from '../../../shared/Title';
import Section from '../../../shared/Section';
import Download from './Download';
import Summary from './Summary';
import Gallery from './Gallery';
import OpenSource from './OpenSource';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Overview = () => (
  <Wrapper>
    <Title text="Smallify" />
    <Section>
      <Download />
    </Section>
    <Section>
      <Summary />
    </Section>
    <Section>
      <Gallery />
    </Section>
    <Section>
      <OpenSource />
    </Section>
  </Wrapper>
);

export default Overview;
