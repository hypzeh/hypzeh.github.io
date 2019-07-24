import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 1rem 1rem 1rem 0;
  background-color: white;
  border-radius: 50%;

  img {
    width: inherit;
    object-fit: cover;
    border-radius: 50%;
    padding: .25rem;
  }
`;

const Information = styled.div`
  height: 100%;
`;

const Profile = () => (
  <Container>
    <Image>
      <img src="https://placekitten.com/800/800" alt="Nick Smirnoff" />
    </Image>
    <Information>
      <p>
        {'I\'m '}
        <strong>Nick Smirnoff</strong>
        {' - a developer from the United Kingdom!'}
      </p>
      <p>
        <strong>Dedicated</strong>
        {'; seeking to gain greater experience and knowledge in content creation and development.'}
      </p>
      <p>
        <strong>Innovative</strong>
        {'; engineering solutions at the forefront of technical advancement.'}
      </p>
      <p>
        <strong>Motivated</strong>
        {'; craving to deliver continuous improvement.'}
      </p>
    </Information>
  </Container>
);

export default Profile;
