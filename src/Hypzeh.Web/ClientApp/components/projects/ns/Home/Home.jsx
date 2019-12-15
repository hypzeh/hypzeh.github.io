import React from 'react';
import styled from 'styled-components';

import greeting from './greeting';
import Title from '../../../shared/Title';
import Introduction from './Introduction';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Home = () => (
  <Wrapper>
    <Title text={greeting} />
    <Introduction />
  </Wrapper>
);

export default Home;
