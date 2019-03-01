import React from 'react';

import ProjectListItemTypes from '../../types/projects/projectListItem';

const ProjectListItem = ({ project }) => (
  <React.Fragment>
    <h1>{project.title}</h1>
    <img src={project.thumbnail} />
    <p>{project.description}</p>
    <div>{project.tags.map(tag => ` ${tag}`)}</div>
  </React.Fragment>
);

ProjectListItem.propTypes = ProjectListItemTypes;

export default ProjectListItem;
