import React from 'react';
import styled from 'styled-components';

import Title from '../../../shared/Title';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Overview = () => (
  <Wrapper>
    <Title text="Smallify" />
  </Wrapper>
);

export default Overview;
