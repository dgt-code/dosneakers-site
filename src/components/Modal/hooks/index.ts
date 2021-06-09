import { useState, useEffect } from 'react';

export const useOpenModal = (initialStateModal = false) => {
  const [isOpen, setIsOpen] = useState(initialStateModal);

  const contentBody = document.getElementsByTagName('body')[0];

  useEffect(() => {
    initialStateModal
      ? (contentBody.style.overflow = 'hidden')
      : (contentBody.style.overflow = 'auto');
    setIsOpen(initialStateModal);
  }, [contentBody, initialStateModal]);

  return { isOpen, setIsOpen };
};
