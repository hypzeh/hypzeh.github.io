import React from 'react';

import Styles from './Introduction.styles';

const Introduction = () => (
  <Styles.Wrapper>
    <Styles.Name>
      {'I\'m '}
      <Styles.Highlight>Nick Smirnoff</Styles.Highlight>
      .
    </Styles.Name>
    <Styles.Title>
      {'I\'m a full stack developer.'}
    </Styles.Title>
  </Styles.Wrapper>
);

export default Introduction;
