import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PRIMARY } from '../../../../../utils/style/variables';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const Wrapper = styled.form`
display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0 .5rem 1rem;

  input {
    width: 100%;
    margin: 0 .5rem;
    background-color: transparent;
    border: none;
    color: ${PRIMARY.colour};

    &:focus {
      outline: none;
    }

    &::-ms-clear {
      display: none;
    }
  }
`;

const Input = React.forwardRef(({ onSubmit }, ref) => {
  const [command, setCommand] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (command.length === 0) return;

    onSubmit(command);
    setCommand('');
  };

  const handleChange = ({ target }) => {
    if (!target) return;

    setCommand(target.value);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <code>$</code>
      <code>
        <input
          ref={ref}
          type="text"
          maxLength={25}
          spellCheck={false}
          value={command}
          aria-label="command-input"
          onChange={handleChange}
        />
      </code>
    </Wrapper>
  );
});

Input.propTypes = propTypes;

export default Input;
