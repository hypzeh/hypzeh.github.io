import React from 'react';

import projects from '../../lib/projects';
import ProjectListItem from './ProjectListItem';

const ProjectsContainer = () => (
  <React.Fragment>
    <h1>Projects</h1>
    {projects.map(item => <ProjectListItem key={item.title} project={item} />)}
  </React.Fragment>
);

export default ProjectsContainer;
