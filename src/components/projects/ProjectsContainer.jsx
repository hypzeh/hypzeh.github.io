import React from 'react';

import projects from '../../lib/projects';

const ProjectsContainer = () => (
  <React.Fragment>
    <h1>Projects</h1>
    {projects.map(item => <h1 key={item.title}>{item.title}</h1>)}
  </React.Fragment>
);

export default ProjectsContainer;
