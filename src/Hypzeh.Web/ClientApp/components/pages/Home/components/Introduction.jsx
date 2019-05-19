import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import media from '../../../../styles/media';

const Wrapper = styled.div`
  line-height: normal;
  text-align: center;
  font-size: 2.5em;

  ${media.huge`
    font-size: 2.5vw;
  `}

  ${media.small`
    font-size: 0.75em;
  `}
`;

const Introduction = () => (
  <Wrapper>
    <Typist
      cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }}
      startDelay={500}
    >
      {'I\'m '}
      <strong>Nick Smirnoff</strong>
      {'...'}
    </Typist>
  </Wrapper>
);

export default Introduction;
