import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../../../../utils/style/variables';
import profile from './assets/profile.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  border: 3px solid ${PRIMARY.highlight};
  border-radius: 50%;
  margin: 0 1rem;
  object-fit: contain;
`;

const Summary = () => (
  <Wrapper>
    <Image src={profile} alt="profile" />
  </Wrapper>
);

export default Summary;
