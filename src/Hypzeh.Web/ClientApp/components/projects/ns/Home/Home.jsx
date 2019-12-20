import React from 'react';
import styled from 'styled-components';

import greeting from './greeting';
import Title from '../../../shared/Title';
import Section from '../../../shared/Section';
import Introduction from './Introduction';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  section {
    margin: auto 0;
  }
`;

const Home = () => (
  <Wrapper>
    <Title text={greeting} />
    <Section>
      <Introduction />
    </Section>
  </Wrapper>
);

export default Home;
