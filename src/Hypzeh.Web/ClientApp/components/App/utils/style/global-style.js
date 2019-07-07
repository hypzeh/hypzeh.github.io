import { createGlobalStyle } from 'styled-components';

import 'modern-normalize/modern-normalize.css';

import woff2 from '../../assets/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../../assets/fonts/open-sans-v16-latin-regular.woff';
import { PRIMARY } from './variables';

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

    #root {
      position: absolute;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
  }
`;

export default GlobalStyle;
