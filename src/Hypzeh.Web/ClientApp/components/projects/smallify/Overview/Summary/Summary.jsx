import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Summary = () => (
  <Wrapper>
    <p>
      Smallify is a WPF application built with .NET Core 3,
      aiming to provide a simple and minimalistic Spotify experience.
    </p>
  </Wrapper>
);

export default Summary;
