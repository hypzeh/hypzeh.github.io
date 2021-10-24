import styled from 'styled-components';

import media from '~style/media';

const Wrapper = styled.div`
  display: ${({ collapsed }) => (collapsed ? 'none' : 'flex')};
  flex-direction: column;
  position: absolute;
  left: 5rem;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colours.sidebar_background_colour};
  min-width: 15rem;
  z-index: 10;
  overflow: hidden;

  ${media.medium`
    display: flex;
    position: static;
    left: unset;
    right: unset;
    top: unset;
    bottom: unset;
    width: 15rem;
    height: 100%;
  `}

  ${media.large`
    min-width: 20rem;
    width: 20rem;
  `}
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    margin: 0 0 1rem 0;
    padding: .5rem;
    font-size: larger;
    font-weight: bold;
  }
`;

export default { Wrapper, Header };
