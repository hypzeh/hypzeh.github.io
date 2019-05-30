import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TrackMouse = ({ children }) => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const setDefaultPosition = () => {
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
      setDefaultPosition();
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <React.Fragment>
      {children(position)}
    </React.Fragment>
  );
};

TrackMouse.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TrackMouse;
