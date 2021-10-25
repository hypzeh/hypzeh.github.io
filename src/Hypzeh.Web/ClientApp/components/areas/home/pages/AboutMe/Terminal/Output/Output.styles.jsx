import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: .5rem;

  & + & {
    margin-top: 1rem;
  }
`;

const Command = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Value = styled.pre`
  white-space: pre-wrap;
  margin: 0;
`;

const Link = styled.a`
  font-family: monospace;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colours.terminal_output_colour_highlight};
`;

const Timestamp = styled.code`
  color: ${({ theme }) => theme.colours.terminal_output_colour_highlight};
`;

export default {
  Wrapper,
  Command,
  Value,
  Link,
  Timestamp,
};
