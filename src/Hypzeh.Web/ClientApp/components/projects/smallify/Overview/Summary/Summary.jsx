import React from 'react';
import styled, { keyframes } from 'styled-components';

import media from '../../../../../utils/style/media';
import ButtonLink from '../../../../shared/ButtonLink';
import DefaultPlayer from './assets/default-player.png';
import AuthenticationSettings from './assets/authentication-settings.png';

const slideRight = keyframes`
  0% { left: -100%; }
  100% { left: 0; }
`;

const slideLeft = keyframes`
  0% { right: -100%; }
  100% { right: 0; }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Screenshot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: .5s ease 1 ${({ reverse }) => (reverse ? slideLeft : slideRight)};

  ${media.huge`
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  `}

  img {
    position: relative;
    height: auto;
    width: 600px;
    max-width: 100%;
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5);
    margin: 2rem auto 2rem auto;

    ${media.huge`
      margin: ${({ reverse }) => (reverse ? '2rem 0 2rem 1rem' : '2rem 1rem 2rem 0')};
    `}
  }
`;

const Description = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    margin: 0 0 .5rem;
  }
`;

const Summary = () => (
  <Wrapper>
    <p>
      Smallify is a WPF application built with .NET Core 3.1,
      aiming to provide a simple and minimalistic Spotify experience.
      Published as a single executable, all dependencies are packaged alongside the application.
    </p>
    <Screenshot>
      <img src={DefaultPlayer} alt="default-player" />
      <Description>
        <p>
          View what is currently playing at any time,
          and control playback with a Spotify premium account.
        </p>
        <ButtonLink
          to="https://github.com/hypzeh/smallify"
          text="View project"
        />
      </Description>
    </Screenshot>
    <Screenshot reverse>
      <img src={AuthenticationSettings} alt="authentication-settings" />
      <Description>
        <p>
          Smallify uses the &apos;Authorization Code Flow&apos; for authentication with Spotify.
          This flow includes refresh tokens, which allows users to stay authenticated.
        </p>
        <ButtonLink
          to="https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow"
          text="Learn more"
          openInNewTab
        />
      </Description>
    </Screenshot>
  </Wrapper>
);

export default Summary;
