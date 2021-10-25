import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Output.styles';

const propTypes = {
  output: PropTypes.shape({
    command: PropTypes.string,
    link: PropTypes.string,
    value: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

const Output = ({ output }) => (
  <Styles.Wrapper>
    {output.command && (
      <Styles.Command>
        <code>{`$ ${output.command}`}</code>
        <Styles.Timestamp>{output.timestamp}</Styles.Timestamp>
      </Styles.Command>
    )}
    {output.link
      ? (<Styles.Link href={output.link} aria-label={output.value} target="_blank" rel="noopener noreferrer">{output.value}</Styles.Link>)
      : (<Styles.Value>{output.value}</Styles.Value>)}
  </Styles.Wrapper>
);

Output.propTypes = propTypes;

export default Output;
