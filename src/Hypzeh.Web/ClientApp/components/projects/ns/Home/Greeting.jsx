import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../../../utils/style/variables';

const Wrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Highlight = styled.strong`
  color: ${PRIMARY.highlight};
`;

const Greeting = () => (
  <Wrapper>
    <h2>
      {'I\'m '}
      <Highlight>Nick Smirnoff</Highlight>
      .
    </h2>
    <h2>
      {'I\'m a full-stack developer.'}
    </h2>
  </Wrapper>
);

export default Greeting;
