import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PRIMARY } from '../../../../../utils/style/variables';

const propTypes = {
  output: PropTypes.shape({
    command: PropTypes.string,
    link: PropTypes.string,
    value: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

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
  white-space: pre-wrap;
  color: ${PRIMARY.highlight};
`;

const Timestamp = styled.code`
  color: ${PRIMARY.highlight};
`;

const Output = ({ output }) => (
  <Wrapper>
    {output.command && (
      <Command>
        <code>{`$ ${output.command}`}</code>
        <Timestamp>{output.timestamp}</Timestamp>
      </Command>
    )}
    {output.link
      ? (<Link href={output.link} aria-label={output.value} target="_blank" rel="noopener noreferrer">{output.value}</Link>)
      : (<Value>{output.value}</Value>)}
  </Wrapper>
);

Output.propTypes = propTypes;

export default Output;
