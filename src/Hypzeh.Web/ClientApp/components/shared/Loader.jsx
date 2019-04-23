import React from 'react';

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center h-100">
    <div className="spinner-grow text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loader;
