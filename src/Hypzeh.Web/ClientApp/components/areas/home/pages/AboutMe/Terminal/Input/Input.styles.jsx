import styled from 'styled-components';

const Wrapper = styled.form`
display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0 .5rem 1rem;

  input {
    font-family: monospace;
    width: 100%;
    margin: 0 .5rem;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colours.terminal_input_colour};

    &:focus {
      outline: none;
    }

    &::-ms-clear {
      display: none;
    }
  }
`;

export default { Wrapper };
