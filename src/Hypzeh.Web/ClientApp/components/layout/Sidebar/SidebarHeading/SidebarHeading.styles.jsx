import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin: 0 0 .5rem 0;
    padding: 0 .5rem;
    font-size: medium;
    font-weight: normal;
  }
`;

export default { Wrapper };
