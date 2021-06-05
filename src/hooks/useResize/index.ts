import { useState, useEffect } from 'react';

export const useResize = (dimension: number): boolean => {
  const [isResize, setIsResize] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= dimension
        ? setIsResize(false)
        : setIsResize(true);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimension, isResize]);

  return isResize;
};
