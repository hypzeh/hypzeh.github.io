import React from 'react';
import { Helmet } from 'react-helmet';

const HomeDisplay = () => (
  <React.Fragment>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <section>
      <div>Software Engineer</div>
      <div>Nick Smirnoff</div>
    </section>
  </React.Fragment>
);

export default HomeDisplay;
