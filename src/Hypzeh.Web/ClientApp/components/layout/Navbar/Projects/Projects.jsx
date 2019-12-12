import React from 'react';
import styled from 'styled-components';

import { SECONDARY } from '../../../../utils/style/variables';
import Scroller from '../../../shared/Scroller';
import Separator from '../../../shared/Separator';
import Button from './Button';

const Wrapper = styled.div`
  width: 4.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  background-color: ${SECONDARY.background};
  overflow: hidden;
`;

const Projects = () => (
  <Wrapper>
    <Scroller width="5.625rem" overflow="scroll">
      <Button to="/" isActive={false} onActive={() => {}} />
      <Separator />
    </Scroller>
  </Wrapper>
);

export default Projects;
