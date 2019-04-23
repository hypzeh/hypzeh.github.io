import React, { useState, useEffect } from 'react';

import Loader from './components/shared/Loader';
import AppRouter from './components/routers/AppRouter';
import './styles/sass/app.scss';

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => setTimeout(() => setShowLoader(false), 1000), []);

  return (
    <div className="App">
      {
        showLoader
          ? <Loader />
          : <AppRouter />
      }
    </div>
  );
};

export default App;
