import React from 'react';
import styled from 'styled-components';

import { appFooterHeight } from '../../styles/variables';
import media from '../../styles/media';

const AppFooter = () => (
  <Footer>
    <Top>Top</Top>
    <Middle>
      <div>Home</div>
      <div>About</div>
      <div>Projects</div>
      <div>Contact</div>
    </Middle>
    <Bottom>
      <div>&copy; Nick Smirnoff</div>
      <div>NS</div>
      <div>
        <a href="/">LI</a>
        <a href="/">TW</a>
        <a href="/">GH</a>
      </div>
    </Bottom>
  </Footer>
);

const Footer = styled.footer`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${appFooterHeight};
  position: sticky;
  bottom: 0;
  z-index: -1;
`;

const Top = styled.div`
  border: 1px green solid;
`;

const Middle = styled.div`
  border: 1px green solid;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${media.tablet`
    flex-direction: column;
    align-items: center;
  `}

  div {
    border: 1px solid red;
    width: 10rem;
    text-align: center;
    margin: .5rem;
  }
`;

const Bottom = styled.div`
  border: 1px green solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    margin: 0 .5rem;
  }
`;

export default AppFooter;
