import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { appFooterHeight, primaryColour } from '../../styles/variables';
import media from '../../styles/media';
import { pages, social } from '../../lib/navigation';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const AppFooter = () => (
  <Footer>
    <Top>Top</Top>
    <Middle>
      {
        pages.map(({ name, link }) => (
          <NavItem key={link} to={link} onClick={scrollToTop}>{name}</NavItem>
        ))
      }
    </Middle>
    <Bottom>
      <div>&copy; Nick Smirnoff</div>
      <div id="logo">NS</div>
      <div>
        {
          social.map(({ name, link, icon }) => (
            <SocialLink key={name} href={link} aria-label={name} target="_blank" rel="noopener noreferrer">
              {icon}
            </SocialLink>
          ))
        }
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

const SocialLink = styled.a`
  color: ${primaryColour};

  :hover {
    color: gray;
  }
`;

export default AppFooter;
