import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { APP_SIZE, PRIMARY, SECONDARY } from '../../styles/variables';
import media from '../../styles/media';
import { pages, socials } from '../../lib/navigation';
import Icon from '../shared/Icon';
import Emoji from '../shared/Emoji';


const AppFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Footer>
      <Section id="top">
        <Emoji enableRoulette />
      </Section>
      <Section id="middle">
        {
          pages.map(({ name, path }) => (
            <NavItem key={name} to={path} onClick={scrollToTop}>{name}</NavItem>
          ))
        }
      </Section>
      <Section id="bottom">
        <span>&copy; 2019 Nick Smirnoff</span>
        <div>
          {
            socials.map(({ name, url, icon }) => (
              <SocialLink key={name} href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                <Icon icon={icon} />
              </SocialLink>
            ))
          }
        </div>
      </Section>
    </Footer>
  );
};

const Footer = styled.footer`
  background: ${SECONDARY.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${APP_SIZE.footer};
  position: sticky;
  bottom: 0;
  z-index: 0;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  &#top {
    margin: 0;
    line-height: normal;
    font-size: 5em;

    ${media.medium`
      font-size: 2em;
    `}
  }

  &#middle {
    ${media.medium`
      flex-direction: column;
      align-items: center;
    `}
  }

  &#bottom {
    justify-content: space-between;
    padding: 0 .5rem;
  }
`;

const NavItem = styled(Link)`
  width: 10rem;
  margin: .5rem;
  background: ${PRIMARY.background};
  border: 1px solid ${PRIMARY.colour};
  color: ${PRIMARY.colour};
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;

  &:hover {
    background: ${PRIMARY.colour};
    color: black;
  }
`;

const SocialLink = styled.a`
  color: ${PRIMARY.colour};

  svg {
    width: 1rem;
    height: 1rem;
    fill: white;

    &:hover {
      fill: gray;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

export default AppFooter;
