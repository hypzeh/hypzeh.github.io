import styled from 'styled-components';

const Wrapper = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
  overflow: hidden;
`;

const Heading = styled.h1`
  font-weight: 100;
  margin: .5rem 0;
`;

export default { Wrapper, Heading };
