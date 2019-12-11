import React, { useState } from 'react';
import styled from 'styled-components';

import { SECONDARY } from '../../../utils/style/variables';
import { Scroller } from '../../shared';
import ProjectLink from './ProjectLink';

const Wrapper = styled.nav`
  width: 4.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${SECONDARY.background};
  overflow: hidden;
  z-index: 300;
`;

const Separator = styled.hr`
  margin-inline-start: .5rem;
  margin-inline-end: .5rem;
  border-style: solid;
`;

const ProjectNavbar = () => {
  const [activePath, setActivePath] = useState('/');

  return (
    <Wrapper>
      <Scroller width="5.625rem" overflow="scroll">
        <ProjectLink to="/" isActive={activePath === '/'} onActive={() => setActivePath('/')} />
        <Separator />
      </Scroller>
    </Wrapper>
  );
};

export default ProjectNavbar;
