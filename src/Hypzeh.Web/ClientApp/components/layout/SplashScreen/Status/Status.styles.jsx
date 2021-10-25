import styled from 'styled-components';

import variants from './variants';
import media from '~style/media';

const Wrapper = styled.p`
  min-width: 10rem;
  max-width: 100%;
  text-align: center;
  margin: .5rem;
  color: ${({ theme, variant }) => ({
    [variants.STANDARD]: theme.colours.splash_screen_status_standard_colour,
    [variants.WARNING]: theme.colours.splash_screen_status_warning_colour,
    [variants.ERROR]: theme.colours.splash_screen_status_error_colour,
  })[variant]};

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
