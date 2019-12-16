import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../../../../utils/style/variables';
import media from '../../../../../utils/style/media';
import profile from './assets/profile.jpg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.large`
    flex-direction: row;
  `}
`;

const Image = styled.img`
  width: 15rem;
  height: 15rem;
  border: 3px solid ${PRIMARY.highlight};
  border-radius: 50%;
  margin: 0 1rem;
  object-fit: contain;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = () => (
  <Wrapper>
    <Image src={profile} alt="profile" />
    <Content>
      <p>I&apos;m a software engineer based in Southampton, United Kingdom.</p>
    </Content>
  </Wrapper>
);

export default Summary;
