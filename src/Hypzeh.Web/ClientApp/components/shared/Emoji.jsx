import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import emojis from '../../lib/emojis';

const Span = styled.span`
  font-size: ${props => props.fontSize};
  user-select: none;
  cursor: default;
`;

const propTypes = {
  emoji: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  enableRoulette: PropTypes.bool,
};

const defaultProps = {
  ...emojis.getRandom(),
  size: 'inherit',
  enableRoulette: false,
};

const Emoji = ({
  emoji,
  label,
  size,
  enableRoulette,
}) => {
  const [state, setState] = useState({ emoji, label });

  const getNewEmoji = () => {
    if (!enableRoulette) return;

    setState(emojis.getRandom());
  };

  return (
    <Span
      fontSize={size}
      role="img"
      aria-label={state.label || 'emoji'}
      aria-hidden="false"
      onMouseEnter={getNewEmoji}
      onClick={getNewEmoji}
    >
      {state.emoji}
    </Span>
  );
};

Emoji.propTypes = propTypes;
Emoji.defaultProps = defaultProps;

export default Emoji;
