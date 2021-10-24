import styled, { keyframes } from 'styled-components';

const progress = keyframes`
  0% { margin-left: 0; margin-right: 100%; }
  50% { margin-left: 25%; margin-right: 0; }
  100% { margin-left: 100%; margin-right: 0; }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colours.splash_screen_background_colour};
  color: ${({ theme }) => theme.colours.splash_screen_colour};
  fill: ${({ theme }) => theme.colours.splash_screen_colour};
  user-select: none;

  &::before {
    content: '';
    flex-grow: 1;
    max-height: calc(50% - 100px);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > svg {
    margin: .5rem .5rem .25rem .5rem;
  }

  & > h3 {
    margin: .25rem .5rem .5rem .5rem;
    text-transform: uppercase;
  }
`;

const Loader = styled.div`
  display: flex;
  height: .1rem;
  width: 10rem;

  &::before {
    content: '';
    width: 100%;
    background-color: ${({ theme }) => theme.colours.splash_screen_colour};
    animation: ${progress} 2s infinite;
  }
`;

export default {
  Wrapper,
  Content,
  Logo,
  Loader,
};
