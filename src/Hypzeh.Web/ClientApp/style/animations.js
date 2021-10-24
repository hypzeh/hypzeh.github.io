import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const slideRight = keyframes`
  0% { left: -100%; }
  100% { left: 0; }
`;

export const slideLeft = keyframes`
  0% { right: -100%; }
  100% { right: 0; }
`;

export const slideDown = keyframes`
  0% { top: -20rem; }
  100% { top: 0; }
`;
