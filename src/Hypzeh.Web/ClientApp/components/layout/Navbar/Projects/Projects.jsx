import React, { useContext } from 'react';
import styled from 'styled-components';

import { SECONDARY } from '../../../../utils/style/variables';
import { NavigationContext } from '../../../../contexts/navigation';
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

const Projects = () => {
  const [{ projects }] = useContext(NavigationContext);

  return (
    <Wrapper>
      <Scroller width="5.625rem" overflow="scroll">
        <Button to="/" icon="ns" />
        <Separator />
        {projects
          .filter(({ path }) => path !== '/')
          .map(({ path, icon }) => (
            <Button key={path} to={path} icon={icon} />
          ))}
      </Scroller>
    </Wrapper>
  );
};

export default Projects;
