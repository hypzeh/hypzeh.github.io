import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components';

import Scroller from '../../../../shared/Scroller';
import commands from './commands';
import Output from './Output';
import Input from './Input';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Container = styled.div`
  height: 100%;
  max-width: 75rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Header = styled.div`
  width: 100%;
  min-height: 1rem;
  background-color: #cccccc;
  border-radius: .5rem .5rem 0 0;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  max-height: 25rem;
  background-color: #383737;
  border-radius: 0 0 .5rem .5rem;
  overflow: hidden;
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
      <Container>
        <Header />
        <Content>
          <Scroller>
            <Output output={commands.createOutput(undefined, 'NS-CLI [Version 1.0.0-beta]\nType \'help\' for a list of commands.')} />
            {print.map((output) => (
              <Output
                key={`${output.timestamp}`}
                output={output}
              />
            ))}
            <Input ref={input} onSubmit={handleSubmit} />
          </Scroller>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Terminal;
