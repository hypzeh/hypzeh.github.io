import React from 'react';
import { Helmet } from 'react-helmet';

import Styles from './App.styles';

const SplashScreen = React.lazy(() => import(/* webpackChunkName: "ns~splashscreen" */ './components/layout/SplashScreen'));

const App = () => {
  const name = 'Nick Smirnoff';

  return (
    <Styles.Wrapper>
      <Helmet titleTemplate={`%s / ${name}`} defaultTitle={name} />
      <SplashScreen title={name} task={() => {}} onComplete={() => {}} />
    </Styles.Wrapper>
  );
};

export default App;
