import React from 'react';
import styled from 'styled-components';

import media from '../../../../styles/media';
import profile from '../../../../assets/img/profile.jpg';

const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;

  ${media.medium`
    flex-direction: column;
    align-items: center;
  `}
`;

const Image = styled.img`
  height: 30rem;
  object-fit: cover;
  border-radius: .5rem;

  ${media.large`
    height: 40vw;
  `}

  ${media.small`
    height: 10rem;
  `}
`;

const Information = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1rem;

  ${media.medium`
    padding-left: 0;
  `}
`;

const Profile = () => (
  <Conatiner>
    <Image src={profile} alt="Nick Smirnoff" />
    <Information>
      <h2>About</h2>
      <p>{'I\'m Nick Smirnoff - a developer from the United Kingdom!'}</p>
    </Information>
  </Conatiner>
);

export default Profile;
