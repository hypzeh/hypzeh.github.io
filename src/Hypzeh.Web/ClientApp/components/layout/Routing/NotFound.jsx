import React from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../../utils/style/variables';
import Title from '../../shared/Title';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Highlight = styled.h2`
  color: ${PRIMARY.highlight};
  text-align: center;
`;


const NotFound = () => (
  <Wrapper>
    <Title text="404" />
    <Highlight>PAGE NOT FOUND</Highlight>
  </Wrapper>
);

export default NotFound;
