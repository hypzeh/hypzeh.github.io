import React from 'react';
import ReactDOM from 'react-dom';

import RootProvider from './contexts/RootProvider';
import App from './App';

const ELEMENT = (
  <RootProvider>
    <App />
  </RootProvider>
);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(ELEMENT, MOUNT_NODE);
