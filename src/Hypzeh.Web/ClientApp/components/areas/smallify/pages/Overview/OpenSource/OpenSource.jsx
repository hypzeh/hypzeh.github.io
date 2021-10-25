import React from 'react';

import Styles from './OpenSource.styles';
import ButtonLink from '~components/shared/ButtonLink';

const OpenSource = () => (
  <Styles.Wrapper>
    <h2>Open source</h2>
    <p>
      Smallify is open source, pull requests are welcome!
    </p>
    <ButtonLink to="https://github.com/hypzeh/smallify" text="Fork on GitHub" />
  </Styles.Wrapper>
);

export default OpenSource;
