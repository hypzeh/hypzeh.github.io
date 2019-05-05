import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { randomEmoji } from '../../lib/emojis';

const Emoji = ({ emoji, label, enableRoulette }) => {
  const [state, setState] = useState({ emoji, label });

  const onMouseEnter = () => {
    if (!enableRoulette) return;

    setState(randomEmoji());
  };

  return (
    <Span role="img" aria-label={state.label || ''} aria-hidden={state.label ? 'false' : 'true'} onMouseEnter={onMouseEnter}>
      {state.emoji}
    </Span>
  );
};

const Span = styled.span`
  cursor: default;
`;

Emoji.propTypes = {
  emoji: PropTypes.string,
  label: PropTypes.string,
  enableRoulette: PropTypes.bool,
};
Emoji.defaultProps = {
  ...randomEmoji(),
  enableRoulette: false,
};

export default Emoji;
