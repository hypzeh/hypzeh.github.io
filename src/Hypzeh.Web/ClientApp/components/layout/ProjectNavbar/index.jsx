import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { SECONDARY } from '../../../utils/style/variables';
import { Scroller } from '../../shared';
import ProjectLink from './components/ProjectLink';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      defaultPath: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

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
`;

const ProjectNavbar = ({ location, projects }) => {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const project = projects.find((item) => item.defaultPath === `/${location.pathname.split('/', 2)[1]}`);
    if (!project) return;

    setActivePath(project.defaultPath);
  }, []);

  return (
    <Wrapper>
      <Scroller width="5.625rem" overflow="scroll">
        <ProjectLink
          title="Nick Smirnoff"
          path="/"
          icon="ns"
          isActive={activePath === '/'}
          setAsActivePath={() => setActivePath('/')}
        />
        <Separator />
        {projects.map(({ title, defaultPath, icon }) => (
          <ProjectLink
            key={defaultPath}
            title={title}
            path={defaultPath}
            icon={icon}
            isActive={activePath === defaultPath}
            setAsActivePath={() => setActivePath(defaultPath)}
          />
        ))}
      </Scroller>
    </Wrapper>
  );
};

ProjectNavbar.propTypes = propTypes;

export default withRouter(ProjectNavbar);
