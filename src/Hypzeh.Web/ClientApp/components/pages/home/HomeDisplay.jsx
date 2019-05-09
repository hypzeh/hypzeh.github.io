import React, { useState } from 'react';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import Page from '../Page';
import media from '../../../styles/media';
import { PRIMARY } from '../../../styles/variables';

const HomeDisplay = () => {
  const [isTitleTyped, setIsTitleTyped] = useState(false);

  return (
    <Page title="Home">
      <Section>
        <Title>
          <Typist cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }} onTypingDone={() => setIsTitleTyped(true)}>
            <Typist.Delay ms={500} />
            <span>NICK SMIRNOFF</span>
            <Typist.Delay ms={600} />
          </Typist>
        </Title>
        <Content>
          {
            isTitleTyped && (
              <Typist cursor={{ element: '_' }}>
                <Typist.Delay ms={600} />
                <span>Software Engineer.</span>
                <Typist.Backspace count={18} delay={5000} />
                <span>Check out my </span>
                <Link to="/projects">projects</Link>
                .
              </Typist>
            )
          }
        </Content>
      </Section>
    </Page>
  );
};

const blink = keyframes`
  0% { opacity: 1; }
  45% { opacity: 1; }
  50% { opacity: 0; }
  95% { opacity: 0; }
  100% { opacity: 1; }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .Cursor {
    opacity: 1;
    animation: ${blink} 1s linear infinite;
  }
`;

const Title = styled.h1`
  position: absolute;
  width: 100%;
  bottom: 5%;
  margin: 0;
  line-height: normal;
  font-size: 500%;

  ${media.large`
    font-size: 400%;
  `}

  ${media.medium`
    font-size: 300%;
  `}

  ${media.small`
    font-size: 200%;
  `}
`;

const Content = styled.div`
  width: 100%;
  text-align: center;
  line-height: normal;
  font-size: 250%;

  ${media.large`
    font-size: 200%;
  `}

  ${media.medium`
    font-size: 150%;
  `}

  ${media.small`
    font-size: 100%;
  `}
`;

const Link = styled(NavLink)`
  color: ${PRIMARY.colour};
`;

export default HomeDisplay;
