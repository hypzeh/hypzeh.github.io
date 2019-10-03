import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = ({ target }) => {
      setWidth(target.innerWidth);
      setHeight(target.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { width, height };
};

export default useWindowSize;
