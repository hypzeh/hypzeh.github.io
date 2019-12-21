import React from 'react';
import styled from 'styled-components';

import ButtonLink from '../../../../shared/ButtonLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OpenSource = () => (
  <Wrapper>
    <h2>Open source</h2>
    <p>
      Smallify is open source, pull requests are welcome!
    </p>
    <ButtonLink to="https://github.com/hypzeh/smallify" text="Fork on GitHub" />
  </Wrapper>
);

export default OpenSource;
