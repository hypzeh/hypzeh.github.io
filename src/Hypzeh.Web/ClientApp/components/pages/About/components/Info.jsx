import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 25rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 1rem;
`;

const Info = () => (
  <div>
    <Image src="http://placekitten.com/1000/1500" alt="" />
    <div>
      <h2>About</h2>
      <p>{'I\'m Nick Smirnoff - a developer from the United Kingdom!'}</p>
    </div>
  </div>
);

export default Info;
