import styled from 'styled-components';

import media from '~style/media';

const Wrapper = styled.p`
  min-width: 10rem;
  max-width: 100%;
  text-align: center;
  margin: .5rem;
  color: ${({ type, theme }) => {
    switch (type) {
      case 'warning': return theme.colours.splash_screen_status_warning_colour;

      case 'error': return theme.colours.splash_screen_status_error_colour;

      case 'standard':
      default: return theme.colours.splash_screen_status_standard_colour;
    }
  }};

  ${media.small`
    max-width: 30rem;
  `}

  ${media.medium`
    max-width: 45rem;
  `}

  ${media.large`
    max-width: 70rem;
  `}

  ${media.huge`
    max-width: 100%;
  `}
`;

export default { Wrapper };
