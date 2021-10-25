import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Styles from './Input.styles';

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

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
    <Styles.Wrapper onSubmit={handleSubmit}>
      <code>$</code>
      <input
        ref={ref}
        type="text"
        maxLength={25}
        spellCheck={false}
        value={command}
        aria-label="command-input"
        onChange={handleChange}
      />
    </Styles.Wrapper>
  );
});

Input.propTypes = propTypes;

export default Input;
