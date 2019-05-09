import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { randomEmoji } from '../../lib/emojis';

const Emoji = ({
  emoji,
  label,
  size,
  enableRoulette,
}) => {
  const [state, setState] = useState({ emoji, label });

  const getNewEmoji = () => {
    if (!enableRoulette) return;

    setState(randomEmoji());
  };

  return (
    <Span
      fontSize={size}
      role="img"
      aria-label={state.label || ''}
      aria-hidden={state.label ? 'false' : 'true'}
      onMouseEnter={getNewEmoji}
      onClick={getNewEmoji}
    >
      {state.emoji}
    </Span>
  );
};

const Span = styled.span`
  font-size: ${props => props.fontSize};
  user-select: none;
  cursor: default;
`;

Emoji.propTypes = {
  emoji: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableRoulette: PropTypes.bool,
};
Emoji.defaultProps = {
  ...randomEmoji(),
  size: 'inherit',
  enableRoulette: false,
};

export default Emoji;
