import React from 'react';
import styled from 'styled-components';

import media from '../../../../styles/media';
import profile from '../../../../assets/img/profile.jpg';

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.div`
  width: 10rem;
  height: 10rem;
  margin-top: 1rem;
  margin-right: 1rem;
  background-color: white;
  border-radius: 50%;

  img {
    width: inherit;
    object-fit: cover;
    border-radius: 50%;
    padding: 2px;
  }
`;

const Information = styled.div`
  width: 100%;
  height: 100%;
`;

const Profile = () => (
  <Conatiner>
    <Image>
      <img src={profile} alt="Nick Smirnoff" />
    </Image>
    <Information>
      <h2>About</h2>
      <p>{'I\'m Nick Smirnoff - a developer from the United Kingdom!'}</p>
    </Information>
  </Conatiner>
);

export default Profile;
