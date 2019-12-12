import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.hr`
  margin-inline-start: .5rem;
  margin-inline-end: .5rem;
  border-style: solid;
`;

const Separator = () => (
  <Wrapper />
);

export default Separator;
