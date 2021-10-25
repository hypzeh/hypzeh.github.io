import styled, { keyframes } from 'styled-components';

const progress = keyframes`
  0% { margin-left: 0; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0; }
  100% { margin-left: 100%; margin-right: 0; }
`;

const Wrapper = styled.div`
  min-height: inherit;
  height: .1rem;
  width: 100%;
  text-align: center;
`;

const ProgressLine = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  height: inherit;
  width: 100%;
  margin: 0;
  background-color: transparent;

  &::before {
    content: '';
    width: 100%;
    background-color: ${({ theme }) => theme.colours.loader_background_colour};
    animation: ${progress} 2s infinite;
  }
`;

export default { Wrapper, ProgressLine };
