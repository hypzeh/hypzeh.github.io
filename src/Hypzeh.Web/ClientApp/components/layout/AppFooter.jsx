import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { appFooterHeight, primaryColour } from '../../styles/variables';
import media from '../../styles/media';
import { pages, social } from '../../lib/navigation';
import Icon from '../shared/Icon';

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
      <span>&copy; Nick Smirnoff</span>
      <div>
        {
          social.map(({ name, link, icon }) => (
            <SocialLink key={name} href={link} aria-label={name} target="_blank" rel="noopener noreferrer">
              <Icon icon={icon} />
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
  z-index: 0;
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
  padding: 0 .5rem;
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

  svg {
    width: 1rem;
    height: 1rem;
    fill: white;

    &:hover {
      fill: gray;
    }
  }

  & + & {
    margin-left: .5rem;
  }
`;

export default AppFooter;
