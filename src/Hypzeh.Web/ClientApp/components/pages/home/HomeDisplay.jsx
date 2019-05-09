import React, { useState } from 'react';
import Typist from 'react-typist';
import styled, { keyframes } from 'styled-components';

import Page from '../Page';

const HomeDisplay = () => {
  const [isTitleTyped, setIsTitleTyped] = useState(false);

  return (
    <Page title="Home">
      <Section>
        <Title>
          <Typist cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }} onTypingDone={() => setIsTitleTyped(true)}>
            <Typist.Delay ms={1000} />
            <span>NICK SMIRNOFF</span>
            <Typist.Delay ms={1500} />
          </Typist>
        </Title>
        <Content>
          {
            isTitleTyped && (
              <Typist cursor={{ element: '_' }}>
                <Typist.Delay ms={1000} />
                <span>
                  Software Developer
                  <Typist.Backspace count={9} delay={1000} />
                  Engineer.
                </span>
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
  bottom: 10%;
  margin: 0;
  line-height: normal;
  font-size: 300%;
`;

const Content = styled.div`
  height: 100%;
`;

export default HomeDisplay;
