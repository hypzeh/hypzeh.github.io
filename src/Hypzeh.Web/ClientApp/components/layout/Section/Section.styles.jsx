import styled from 'styled-components';

import media from '~style/media';

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

const Padding = styled.div`
  width: auto;
  padding: .5rem 1rem;
  margin: 0 auto;

  ${media.large`
    width: 800px;
  `}

  ${media.huge`
    width: 1050px;
  `}
`;

export default { Wrapper, Padding };
