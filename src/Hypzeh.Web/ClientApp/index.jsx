import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import registerSW from './utils/register-sw';
import themeManager from './style/theme-manager';
import BaseLoader from './components/layout/SplashScreen/BaseLoader';

const Providers = React.lazy(() => import(/* webpackChunkName: "ns~providers", webpackPreload: true */ './Providers'));
const App = React.lazy(() => import(/* webpackChunkName: "ns~app", webpackPreload: true */ './App'));

const ELEMENT = (
  <Suspense fallback={<BaseLoader theme={themeManager.getUserPreferencesOrDefault().theme} />}>
    <Providers>
      <App />
    </Providers>
  </Suspense>
);
const MOUNT_NODE = document.getElementById('app');

registerSW();
ReactDOM.render(ELEMENT, MOUNT_NODE);
