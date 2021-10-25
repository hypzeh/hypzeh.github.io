import styled from 'styled-components';

import media from '~style/media';
import { slideLeft, slideRight } from '~style/animations';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Screenshot = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: .5s ease 1 ${({ reverse }) => (reverse ? slideLeft : slideRight)};

  ${media.huge`
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  `}

  img {
    position: relative;
    height: auto;
    width: 600px;
    max-width: 100%;
    box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5);
    margin: 2rem auto 2rem auto;

    ${media.huge`
      margin: ${({ reverse }) => (reverse ? '2rem 0 2rem 1rem' : '2rem 1rem 2rem 0')};
    `}
  }
`;

const Description = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    margin: 0 0 .5rem;
  }
`;

export default { Wrapper, Screenshot, Description };
