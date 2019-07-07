import React from 'react';
import styled from 'styled-components';

const Channels = styled.div`
  border: 3px solid yellow;
  background-color: #2f3136;
  width: 15rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Conatiner = styled.div`
  border: 3px solid red;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1 1 auto;
  min-height: 0;
  position: relative;
  background-color: #2f3136;
  contain: layout;
`;

const ScrollerWrapper = styled.div`
  border: 3px solid white;
  contain: layout paint style;
  position: relative;
  display: flex;
  height: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;

const Scroller = styled.div`
  border: 3px solid blue;
  z-index: 1;
  overflow-y: scroll;
  flex: 1 1 auto;
  min-height: 0;
`;

const Panel = () => (
  <Channels>
    <Conatiner>
      <ScrollerWrapper>
        <Scroller>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
        </Scroller>
      </ScrollerWrapper>
    </Conatiner>
  </Channels>
);

export default Panel;
