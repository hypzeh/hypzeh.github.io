import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colours.navbar_background_colour};
  min-width: 5rem;
  width: 5rem;
  max-width: 5rem;
  height: 100%;
  overflow: hidden;
`;

const Links = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export default { Wrapper, Links };
