import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid cyan;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Page = () => (
  <Container />
);

export default Page;
