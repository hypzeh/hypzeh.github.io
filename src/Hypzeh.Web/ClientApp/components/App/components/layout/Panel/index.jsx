import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid blue;
  width: 15rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;

const Panel = () => (
  <Container />
);

export default Panel;
