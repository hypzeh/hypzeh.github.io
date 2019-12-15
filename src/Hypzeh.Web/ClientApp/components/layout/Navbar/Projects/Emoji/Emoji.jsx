import React, { useState } from 'react';
import styled from 'styled-components';

import library from './library';

const Wrapper = styled.div`
  margin-top: auto;
  text-align: center;
  font-size: 3em;
  user-select: none;
  cursor: default;
`;

const Emoji = () => {
  const [emoji, setEmoji] = useState(library.getRandom());

  return (
    <Wrapper
      onMouseEnter={() => setEmoji(library.getRandom())}
      onClick={() => setEmoji(library.getRandom())}
    >
      <span role="img" aria-label={emoji.name}>{emoji.value}</span>
    </Wrapper>
  );
};

export default Emoji;
