import styled from 'styled-components';

import media from '~style/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${media.medium`
    flex-direction: row;
  `}
`;

const Logo = styled.div`
  width: 10rem;
  margin: 1rem;
`;

const Container = styled.ul`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colours.smallify_download_colour_highlight};
  border-radius: .5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: .5rem 1rem;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colours.smallify_download_colour_highlight};
  }
`;

export default {
  Wrapper,
  Logo,
  Container,
  Item,
};
