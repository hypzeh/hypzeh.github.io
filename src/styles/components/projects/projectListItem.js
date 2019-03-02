import styled from 'styled-components';

const ProjectListItem = {};

ProjectListItem.Container = styled.div`
  display: flex;
  border: 1px grey solid;

  &:hover {
    background: #555;
  }

  & + & {
    border-top: 0px;
  }
`;

ProjectListItem.Media = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: .5rem;
`;

ProjectListItem.Thumbnail = styled.img`
  width: 8rem;
  height: 5rem;
  object-fit: cover;
  border-radius: .25rem;
`;

ProjectListItem.Content = styled.div`
  display: block;
`;

ProjectListItem.Title = styled.div`
  font-weight: bold;
`;

ProjectListItem.Description = styled.div`
`;

ProjectListItem.Tags = styled.div`
  font-style: italic;
`;

export default ProjectListItem;
