import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../../../utils/style/variables';
import { slideLeft, slideRight } from '../../../../utils/style/animations';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Name = styled.h2`
  position: relative;
  animation: .5s ease 1 ${slideRight};
`;

const Title = styled.h2`
  position: relative;
  animation: .5s ease 1 ${slideLeft};
`;

const Highlight = styled.strong`
  color: ${PRIMARY.highlight};
`;

const Introduction = () => (
  <Wrapper>
    <Name>
      {'I\'m '}
      <Highlight>Nick Smirnoff</Highlight>
      .
    </Name>
    <Title>
      {'I\'m a full stack developer.'}
    </Title>
  </Wrapper>
);

export default Introduction;
