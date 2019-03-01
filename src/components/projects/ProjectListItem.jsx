import React from 'react';

import ProjectListItemTypes from '../../types/projects/projectListItem';

const ProjectListItem = ({ project }) => (
  <React.Fragment>
    <h1>{project.title}</h1>
  </React.Fragment>
);

ProjectListItem.propTypes = ProjectListItemTypes;

export default ProjectListItem;
