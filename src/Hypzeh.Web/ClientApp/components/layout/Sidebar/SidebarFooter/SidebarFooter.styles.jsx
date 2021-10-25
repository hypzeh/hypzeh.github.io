import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.hr`
  height: 1px;
  width: calc(100% - 1rem);
  margin: .25rem 0;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colours.sidebar_separator_colour};
  background-color: ${({ theme }) => theme.colours.sidebar_separator_colour};
`;

export default { Wrapper, Separator };
