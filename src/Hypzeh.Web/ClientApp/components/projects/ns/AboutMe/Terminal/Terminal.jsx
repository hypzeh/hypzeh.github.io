import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components';

import Scroller from '../../../../shared/Scroller';
import commands from './commands';
import Output from './Output';
import Input from './Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  min-height: 1rem;
  background-color: #cccccc;
  border-radius: .5rem .5rem 0 0;
`;

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  max-height: 25rem;
  background-color: #383737;
  border-radius: 0 0 .5rem .5rem;
  overflow-y: auto;
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5);
  margin-bottom: 2rem;
`;

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
    input.current.scrollIntoView({ behavior: 'smooth' });
  }, [input, print]);

  return (
    <Wrapper onClick={() => input.current.focus()}>
      <Header />
      <Content>
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
      </Content>
    </Wrapper>
  );
};

export default Terminal;
