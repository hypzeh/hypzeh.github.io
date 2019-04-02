import React from 'react';

import ProjectListItemTypes from '../../types/projects/projectListItem';
import S from '../../styles/components/projects/projectListItem';

const ProjectListItem = ({ project }) => (
  <S.Container>
    <S.Media>
      <S.Thumbnail src={project.thumbnail} />
    </S.Media>
    <S.Content>
      <S.Title>{project.title}</S.Title>
      <S.Description>{project.description}</S.Description>
      <S.Tags>{project.tags.map(tag => ` ${tag}`)}</S.Tags>
    </S.Content>
  </S.Container>
);

ProjectListItem.propTypes = ProjectListItemTypes;

export default ProjectListItem;
