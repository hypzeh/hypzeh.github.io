import React from 'react';

import Styles from './Summary.styles';
import DefaultPlayer from './assets/default-player.png';
import AuthenticationSettings from './assets/authentication-settings.png';
import ButtonLink from '~components/shared/ButtonLink';

const Summary = () => (
  <Styles.Wrapper>
    <p>
      Smallify is a WPF application built with .NET Core 3.1,
      aiming to provide a simple and minimalistic Spotify experience.
      Published as a single executable, all dependencies are packaged alongside the application.
    </p>
    <Styles.Screenshot>
      <img src={DefaultPlayer} alt="default-player" />
      <Styles.Description>
        <p>
          View what is currently playing at any time,
          and control playback with a Spotify premium account.
        </p>
        <ButtonLink
          to="https://github.com/hypzeh/smallify"
          text="View project"
        />
      </Styles.Description>
    </Styles.Screenshot>
    <Styles.Screenshot reverse>
      <img src={AuthenticationSettings} alt="authentication-settings" />
      <Styles.Description>
        <p>
          Smallify uses the &apos;Authorization Code Flow&apos; for authentication with Spotify.
          This flow includes refresh tokens, which allows users to stay authenticated.
        </p>
        <ButtonLink
          to="https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow"
          text="Learn more"
          openInNewTab
        />
      </Styles.Description>
    </Styles.Screenshot>
  </Styles.Wrapper>
);

export default Summary;
