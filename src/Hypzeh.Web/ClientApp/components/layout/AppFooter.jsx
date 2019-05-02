import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { appFooterHeight, primaryColour } from '../../styles/variables';
import media from '../../styles/media';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const AppFooter = () => (
  <Footer>
    <Top>Top</Top>
    <Middle>
      <NavItem to="/" onClick={scrollToTop}>HOME</NavItem>
      <NavItem to="/about" onClick={scrollToTop}>ABOUT</NavItem>
      <NavItem to="/projects" onClick={scrollToTop}>PROJECTS</NavItem>
      <NavItem to="/contact" onClick={scrollToTop}>CONTACT</NavItem>
      <NavItem to="/error" onClick={scrollToTop}>
        <span role="img" aria-label="skull">💀</span>
      </NavItem>
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
  width: 10rem;
  margin: .5rem;
  border: 1px solid ${primaryColour};
  color: ${primaryColour};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  :hover {
    background: ${primaryColour};
    color: black;
  }
`;

export default AppFooter;
