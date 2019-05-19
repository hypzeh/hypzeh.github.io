import React, { useState } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { Link } from 'react-router-dom';

import media from '../../../../styles/media';

const Introduction = styled.div`
  border: 0px solid blue;
  line-height: normal;
  text-align: center;
  font-size: 2.5em;

  ${media.huge`
    font-size: 2.5vw;
  `}

  ${media.small`
    font-size: 0.75em;
  `}
`;

const Information = styled.div`
  border: 0px solid red;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: normal;
  text-align: center;
  font-size: 3em;

  ${media.huge`
    font-size: 3vw;
  `}

  ${media.small`
    font-size: 1.25em;
  `}

  .Cursor {
    position: relative;
  }
`;

const NavItem = styled(Link)`
  text-decoration: underline;
  color: white;
  padding: 0 .25rem;

  &:hover {
    background: white;
    color: black;
  }
`;

const Content = () => {
  const [showInformation, setShowInformation] = useState(false);

  const resetInformationTypist = () => {
    setShowInformation(false);
    setShowInformation(true);
  };

  return (
    <React.Fragment>
      <Introduction>
        <Typist
          cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }}
          startDelay={500}
          onTypingDone={() => setShowInformation(true)}
        >
          {'I\'m '}
          <strong>Nick Smirnoff</strong>
          {'...'}
        </Typist>
      </Introduction>
      <Information>
        {showInformation && (
          <Typist cursor={{ element: '_' }} onTypingDone={resetInformationTypist}>
            <Typist.Delay ms={500} />
            <span>
              {'Software engineer living in the UK. '}
              <NavItem to="/about">About me&rarr;</NavItem>
            </span>
            <Typist.Backspace count={45} delay={5000} />
            <Typist.Delay ms={500} />
            <span>
              {'Check out some of my work. '}
              <NavItem to="/projects">Projects&rarr;</NavItem>
            </span>
            <Typist.Backspace count={36} delay={5000} />
            <Typist.Delay ms={500} />
            <span>
              {'Want to get in touch? '}
              <NavItem to="/contact">Contact me&rarr;</NavItem>
            </span>
            <Typist.Backspace count={33} delay={5000} />
          </Typist>
        )}
      </Information>
    </React.Fragment>
  );
};

export default Content;
