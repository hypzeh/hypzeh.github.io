import React, { useState, useEffect, createRef } from 'react';

import Styles from './Terminal.styles';
import Output from './Output';
import Input from './Input';
import Scroller from '~components/layout/Scroller';
import commands from './commands';

const Terminal = () => {
  const [print, setPrint] = useState([]);
  const input = createRef();

  const handleSubmit = (command) => {
    commands.execute(
      command,
      (output, isNew) => setPrint(isNew ? [] : [...print, output]),
    );
  };

  useEffect(() => {
    input.current.focus();
  }, [input]);

  useEffect(() => {
    input.current.scrollIntoView({ behavior: 'smooth' });
  }, [input, print]);

  return (
    <Styles.Wrapper onClick={() => input.current.focus()}>
      <Styles.Header />
      <Styles.Content>
        <Scroller>
          <Output output={commands.createOutput(undefined, 'NS-CLI [Version 1.0.0-beta]\nType \'help\' for a list of commands.')} />
          {print.map((output) => (
            <Output
              key={output.id}
              output={output}
            />
          ))}
          <Input ref={input} onSubmit={handleSubmit} />
        </Scroller>
      </Styles.Content>
    </Styles.Wrapper>
  );
};

export default Terminal;
