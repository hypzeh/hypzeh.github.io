import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../../../../utils/style/variables';
import media from '../../../../../utils/style/media';
import Icon from '../../../../shared/Icon';
import ButtonLink from '../../../../shared/ButtonLink';
import TextLink from '../../../../shared/TextLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.medium`
    flex-direction: row;
  `}
`;

const Logo = styled.div`
  width: 10rem;
  margin: 1rem;
`;

const Container = styled.ul`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid ${PRIMARY.highlight};
  border-radius: .5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: .5rem 1rem;

  & + & {
    border-top: 1px solid ${PRIMARY.highlight};
  }
`;

const Download = () => (
  <Wrapper>
    <Logo>
      <Icon name="smallify" />
    </Logo>
    <Container>
      <Item>
        <strong>MIT</strong>
        <TextLink to="https://github.com/hypzeh/smallify/blob/master/LICENSE">
          <small>License</small>
        </TextLink>
      </Item>
      <Item>
        <strong>Windows</strong>
        <small>For 64-bit Windows 10</small>
      </Item>
      <Item>
        <ButtonLink to="https://github.com/hypzeh/smallify/releases/latest/download/Smallify.GUI.zip">
          <strong>Download</strong>
        </ButtonLink>
      </Item>
    </Container>
  </Wrapper>
);

export default Download;
