import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [x, setX] = useState(window.innerWidth / 2);
  const [y, setY] = useState(window.innerHeight / 2);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      setX(clientX);
      setY(clientY);
    };

    const handleMouseLeave = () => {
      setX(window.innerWidth / 2);
      setY(window.innerHeight / 2);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { x, y };
};

export default useMousePosition;
