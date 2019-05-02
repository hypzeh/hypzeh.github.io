import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { appFooterHeight } from '../../styles/variables';
import media from '../../styles/media';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const AppFooter = () => (
  <Footer>
    <Top>Top</Top>
    <Middle>
      <NavItem to="/" onClick={scrollToTop}>Home</NavItem>
      <NavItem to="/about" onClick={scrollToTop}>About</NavItem>
      <NavItem to="/projects" onClick={scrollToTop}>Projects</NavItem>
      <NavItem to="/contact" onClick={scrollToTop}>Contact</NavItem>
    </Middle>
    <Bottom>
      <div>&copy; Nick Smirnoff</div>
      <div id="logo">NS</div>
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
`;

const Top = styled.div`
  border: 1px green solid;
`;

const Middle = styled.div`
  border: 1px green solid;
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${media.medium`
    flex-direction: column;
    align-items: center;
  `}
`;

const Bottom = styled.div`
  border: 1px green solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    margin: 0 .5rem;
  }

  ${media.small`
    #logo {
      display: none;
    }
  `}
`;

const NavItem = styled(Link)`
  border: 1px solid red;
  width: 10rem;
  text-align: center;
  margin: .5rem;

  :hover {
    background: red;
  }
`;

export default AppFooter;
