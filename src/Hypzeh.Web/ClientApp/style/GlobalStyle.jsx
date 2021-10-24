import { createGlobalStyle } from 'styled-components';

import 'modern-normalize/modern-normalize.css';

import woff2 from '../../wwwroot/fonts/ubuntu-regular.woff2';
import woff from '../../wwwroot/fonts/ubuntu-regular.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src:
      local('Ubuntu'),
      local('Ubuntu-Regular'),
      url('${woff2}') format('woff2'),
      url('${woff}') format('woff');
  }

  body {
    font-family: Ubuntu, Segoe UI, Tahoma, sans-serif !important;
    background-color: ${({ theme }) => theme.colours.global_background_primary};
    color: ${({ theme }) => theme.colours.global_content_primary};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    padding: 0;
    margin: 0;
    overflow: hidden;

    & > div#app {
      height: 100vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }
`;

export default GlobalStyle;
