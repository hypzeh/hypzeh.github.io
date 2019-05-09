import { createGlobalStyle } from 'styled-components';

import { PRIMARY, SECONDARY } from './variables';
import woff2 from '../assets/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../assets/fonts/open-sans-v16-latin-regular.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src:
      local('Open Sans Regular'),
      local('OpenSans-Regular'),
      url('${woff2}') format('woff2'),
      url('${woff}') format('woff'); 
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: ${PRIMARY.background};
    color: ${PRIMARY.colour};
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${PRIMARY.background};
      border-left: 1px solid ${SECONDARY.background}
    }

    ::-webkit-scrollbar-thumb {
      background: ${SECONDARY.colour};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${SECONDARY.hover};
    }
  }
`;

export default GlobalStyle;
