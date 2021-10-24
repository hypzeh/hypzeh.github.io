import styled from 'styled-components';

import media from '~style/media';

const Wrapper = styled.h1`
  margin: 0 0 .5rem 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5em;

  ${media.small`
    font-size: 2em;
  `}

  ${media.medium`
    font-size: 3em;
  `}

  ${media.large`
    font-size: 4em;
  `}

  ${media.huge`
    font-size: 5em;
  `}
`;

export default { Wrapper };
