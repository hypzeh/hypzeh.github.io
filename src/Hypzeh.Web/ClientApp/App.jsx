import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Styles from './App.styles';
import startup from './utils/pipelines/startup-pipeline';

const SplashScreen = React.lazy(() => import(/* webpackChunkName: "ns~splashscreen" */ './components/layout/SplashScreen'));
const AppRouter = React.lazy(() => import(/* webpackChunkName: "mediator~approuter" */ './components/routing/AppRouter'));
const Navbar = React.lazy(() => import(/* webpackChunkName: "mediator~navbar" */ './components/layout/Navbar'));

import(/* webpackChunkName: "mediator~icons" */ './utils/icon-library');

const App = () => {
  const name = 'Nick Smirnoff';
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <Styles.Wrapper>
      <Helmet titleTemplate={`%s / ${name}`} defaultTitle={name} />
      {showSplashScreen
        ? (<SplashScreen title={name} task={startup} onComplete={() => setShowSplashScreen(false)} />)
        : (
          <>
            <Styles.Content>
              <Navbar />
              <AppRouter />
            </Styles.Content>
          </>
        )}
    </Styles.Wrapper>
  );
};

export default App;
