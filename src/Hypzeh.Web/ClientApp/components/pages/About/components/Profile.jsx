import React from 'react';
import styled from 'styled-components';

import media from '../../../../styles/media';
import profile from '../../../../assets/img/profile.jpg';

const Conatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.medium`
    flex-direction: column;
    align-items: center;
  `}
`;

const Image = styled.div`
  width: 30rem;
  height: 30rem;
  margin: 1rem 1rem 1rem 0;
  background-color: white;
  border-radius: 50%;

  ${media.large`
    width: 40vw;
    height: 40vw;
  `}

  ${media.medium`
    margin: 1rem 1rem 0 1rem;
  `}

  ${media.small`
    width: 10rem;
    height: 10rem;
  `}

  img {
    width: inherit;
    object-fit: cover;
    border-radius: 50%;
    padding: .25rem;
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
      <p>{'I\'ve performed suspicion in certainty so frankness by attention pretended. Newspaper or in tolerably education enjoyment.'}</p>
      <p>{'I\'ve Elderly up chicken do at feeling is. Like seen drew no make fond at on rent. Behaviour extremely her explained situation yet september gentleman are who.'}</p>
    </Information>
  </Conatiner>
);

export default Profile;
