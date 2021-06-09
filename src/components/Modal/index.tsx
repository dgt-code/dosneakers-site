import
  React, {
    useEffect,
    useRef,
    MutableRefObject
  } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalOverlay,
  ModalStyled,
  ModalIcon
} from './styled';
import { useOpenModal } from './hooks';
import { useKeyDown } from 'src/hooks';
import { X } from 'src/icons';

interface Props {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  openModal?: boolean;
  closeModal: () => void;
}

export const Modal: React.FC<Props> = ({
  width,
  maxWidth,
  minWidth,
  height,
  openModal,
  closeModal,
  children
}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const contentBody = document.getElementsByTagName('body')[0];

  const { isOpen, setIsOpen } = useOpenModal(openModal);

  const handleClick = (e: React.BaseSyntheticEvent) => {
    if(e.currentTarget === e.target || ref.current.contains(e.target)) {
      setIsOpen(false);
      closeModal();
    }
  };

  const hasPressedKeyEscape = useKeyDown('Escape');

  useEffect(() => {
    hasPressedKeyEscape && closeModal();
  }, [hasPressedKeyEscape, closeModal]);

  return(
    <React.Fragment>
      {createPortal(
        <React.Fragment>
          { isOpen && (
              <ModalOverlay onClick={(e) => handleClick(e)}>
                <ModalStyled
                  width={width}
                  maxWidth={maxWidth}
                  minWidth={minWidth}
                  height={height}>
                  <ModalIcon
                    ref={ref}
                    onClick={(e) => handleClick(e)}>
                    <X />
                  </ModalIcon>
                  {children}
                </ModalStyled>
              </ModalOverlay> )}
        </React.Fragment>,
        contentBody
      )}
    </React.Fragment>
  );
};

Modal.displayName = 'Modal';
