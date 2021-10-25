import React from 'react';

import Styles from './Download.styles';
import SmallifyLogo from '~components/shared/icons/SmallifyLogo';
import ButtonLink from '~components/shared/ButtonLink';

const Download = () => (
  <Styles.Wrapper>
    <Styles.Logo>
      <SmallifyLogo />
    </Styles.Logo>
    <Styles.Container>
      <Styles.Item>
        <strong>MIT</strong>
        <ButtonLink to="https://github.com/hypzeh/smallify/blob/master/LICENSE" isTextLink>
          <small>License</small>
        </ButtonLink>
      </Styles.Item>
      <Styles.Item>
        <strong>Windows</strong>
        <small>For 64-bit Windows 10</small>
      </Styles.Item>
      <Styles.Item>
        <ButtonLink to="https://github.com/hypzeh/smallify/releases/latest/download/Smallify.GUI.zip">
          <strong>Download</strong>
        </ButtonLink>
      </Styles.Item>
    </Styles.Container>
  </Styles.Wrapper>
);

export default Download;
