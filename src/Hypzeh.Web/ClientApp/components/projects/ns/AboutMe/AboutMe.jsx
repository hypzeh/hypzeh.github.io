import React from 'react';
import styled from 'styled-components';

import Title from '../../../shared/Title';
import Summary from './Summary';
import Terminal from './Terminal';

const Wrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AboutMe = () => (
  <Wrapper>
    <Title text="ABOUT ME" />
    <Summary />
    <Terminal />
  </Wrapper>
);

export default AboutMe;
