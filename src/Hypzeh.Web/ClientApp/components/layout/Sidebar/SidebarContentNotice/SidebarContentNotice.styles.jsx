import styled from 'styled-components';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.span`
  width: 100%;
  margin: 1rem 0;
  font-size: larger;
  text-align: center;
`;

export default { Wrapper, Message };
