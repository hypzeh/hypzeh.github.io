import React from 'react';
import styled from 'styled-components';

const AppFooter = () => (
  <Footer>
    <span>TEST</span>
  </Footer>
);

const Footer = styled.footer`
  background: black;
  height: 10rem;
  position: sticky;
  bottom: 0;
  z-index: -1;
`;

export default AppFooter;
