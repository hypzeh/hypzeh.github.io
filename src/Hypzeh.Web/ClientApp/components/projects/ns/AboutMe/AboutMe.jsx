import React from 'react';
import styled from 'styled-components';

import Title from '../../../shared/Title';
import Summary from './Summary';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const AboutMe = () => (
  <Wrapper>
    <Title text="ABOUT ME" />
    <Summary />
  </Wrapper>
);

export default AboutMe;
