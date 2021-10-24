import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Styles from './App.styles';
import startup from './utils/pipelines/startup-pipeline';

const SplashScreen = React.lazy(() => import(/* webpackChunkName: "ns~splashscreen" */ './components/layout/SplashScreen'));

const App = () => {
  const name = 'Nick Smirnoff';
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  return (
    <Styles.Wrapper>
      <Helmet titleTemplate={`%s / ${name}`} defaultTitle={name} />
      {showSplashScreen
        ? (<SplashScreen title={name} task={startup} onComplete={() => setShowSplashScreen(false)} />)
        : (<h1>TEST</h1>)}
    </Styles.Wrapper>
  );
};

export default App;
