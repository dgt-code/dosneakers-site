import { useState, useEffect } from 'react';

export const useKeyDown = (key: string) => {
  const [hasPressed, setHasPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.key === key
        ? setHasPressed(true)
        : setHasPressed(false);
    };

    window.addEventListener('keydown', handleKeyDown, false);
    return () => window.removeEventListener('keydown', handleKeyDown, false);
  }, [key]);

  return hasPressed;
};
