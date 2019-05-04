import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => (
  <Section>
    <ProgressLine />
  </Section>
);

const running = keyframes`
  0% { margin-left: 0; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0; }
  100% { margin-left: 100%; margin-right: 0; }
`;

const Section = styled.section`
  min-height: inherit;
  text-align: center;
`;

const ProgressLine = styled.div`
  height: .1rem;
  width: 100%;
  margin: 0;
  background: transparent;
  display: flex;

  &:before {
    width: 100%;
    background: white;
    content: '';
    animation: ${running} 2s infinite;
  }
`;

export default Loading;
