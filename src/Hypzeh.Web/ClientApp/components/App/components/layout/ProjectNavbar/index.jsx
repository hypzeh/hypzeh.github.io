import React, { Fragment, useState, useEffect } from 'react';
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
    }).isRequired,
  ).isRequired,
};

const Container = styled.nav`
  width: 4.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${SECONDARY.background};
  overflow: hidden;
`;

const Separator = styled.hr`
  margin-inline-start: .5rem;
  margin-inline-end: .5rem;
`;

const ProjectNavbar = ({ location, projects }) => {
  const [activePath, setActivePath] = useState(projects[0]);

  useEffect(() => {
    const project = projects.find(item => item.defaultPath === `/${location.pathname.split('/', 2)[1]}`);
    if (!project) return;

    setActivePath(project.defaultPath);
  }, []);

  return (
    <Container>
      <Scroller width="5.625rem" overflow="scroll">
        {projects.map(({ title, defaultPath }) => (
          <Fragment key={defaultPath}>
            <ProjectLink
              title={title}
              path={defaultPath}
              isActive={activePath === defaultPath}
              setAsActivePath={() => setActivePath(defaultPath)}
            />
            {defaultPath === '/' && (<Separator />)}
          </Fragment>
        ))}
      </Scroller>
    </Container>
  );
};

ProjectNavbar.propTypes = propTypes;

export default withRouter(ProjectNavbar);
