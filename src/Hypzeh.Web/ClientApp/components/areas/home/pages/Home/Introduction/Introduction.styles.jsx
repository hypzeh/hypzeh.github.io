import styled from 'styled-components';

import { slideLeft, slideRight } from '~style/animations';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Name = styled.h2`
  position: relative;
  animation: .5s ease 1 ${slideRight};
`;

const Title = styled.h2`
  position: relative;
  animation: .5s ease 1 ${slideLeft};
`;

const Highlight = styled.strong`
  color: ${({ theme }) => theme.colours.home_introduction_colour_highlight};
`;

export default {
  Wrapper,
  Name,
  Title,
  Highlight,
};
