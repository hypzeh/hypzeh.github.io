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

const Seperator = styled.hr`
  width: calc(100% - .5rem);
  margin: .2rem 0;
`;

const Links = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default { Wrapper, Seperator, Links };
