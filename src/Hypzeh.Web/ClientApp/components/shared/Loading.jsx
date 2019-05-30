import React from 'react';
import styled, { keyframes } from 'styled-components';

const progress = keyframes`
  0% { margin-left: 0; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0; }
  100% { margin-left: 100%; margin-right: 0; }
`;

const Section = styled.section`
  min-height: inherit;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const ProgressLine = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  height: .1rem;
  width: 100%;
  margin: 0;
  background: transparent;

  &::before {
    width: 100%;
    background: white;
    content: '';
    animation: ${progress} 2s infinite;
  }
`;

const Loading = () => (
  <Section>
    <ProgressLine />
  </Section>
);

export default Loading;
