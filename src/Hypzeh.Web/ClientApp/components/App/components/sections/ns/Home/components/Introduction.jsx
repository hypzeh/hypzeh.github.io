import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';

const blink = keyframes`
  0% { opacity: 1; }
  45% { opacity: 1; }
  50% { opacity: 0; }
  95% { opacity: 0; }
  100% { opacity: 1; }
`;

const Container = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  line-height: normal;
  text-align: center;
  font-size: 2.5em;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: normal;
  text-align: center;
  font-size: 1em;

  .Cursor {
    position: relative;
    animation: ${blink} 1s linear infinite;
  }
`;

const Button = styled(Link)`
    text-decoration: underline;
    color: white;
    padding: 0 .25rem;

    &:hover {
      background: white;
      color: black;
    }
`;

const Introduction = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Container>
      <Name>
        <Typist
          cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }}
          startDelay={500}
          onTypingDone={() => setShowContent(true)}
        >
          {'I\'m '}
          <strong>Nick Smirnoff</strong>
          {'...'}
        </Typist>
      </Name>
      <Content>
        {showContent && (
          <Typist cursor={{ element: '_' }}>
            <Typist.Delay ms={500} />
            <span>
              {'Software engineer living in the UK. '}
              <Button to="/about">About me&rarr;</Button>
            </span>
          </Typist>
        )}
      </Content>
    </Container>
  );
};

export default Introduction;
