import React, { useState } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import media from '../../../../styles/media';

const Bio = styled.div`
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

const Info = styled.div`
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

const Content = () => {
  const [showInfoTypist, setShowInfoTypist] = useState(false);

  const resetInfoTypist = () => {
    setShowInfoTypist(false);
    setShowInfoTypist(true);
  };

  return (
    <React.Fragment>
      <Bio>
        <Typist
          cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 0 }}
          startDelay={500}
          onTypingDone={() => setShowInfoTypist(true)}
        >
          {'I\'m '}
          <strong>Nick Smirnoff</strong>
          {' - a software engineer living in the UK.'}
        </Typist>
      </Bio>
      <Info>
        {showInfoTypist && (
          <Typist cursor={{ element: '_' }} onTypingDone={resetInfoTypist}>
            <Typist.Delay ms={500} />
            <span>Check out my projects...</span>
            <Typist.Delay ms={5000} />
            <Typist.Backspace count={24} />
            <Typist.Delay ms={500} />
            <span>More about me...</span>
            <Typist.Delay ms={5000} />
            <Typist.Backspace count={16} />
            <Typist.Delay ms={500} />
            <span>Ways to get in contact...</span>
            <Typist.Delay ms={5000} />
            <Typist.Backspace count={25} />
          </Typist>
        )}
      </Info>
    </React.Fragment>
  );
};

export default Content;
