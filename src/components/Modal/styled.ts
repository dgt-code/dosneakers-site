import styled from 'styled-components';
import { COLORS } from 'src/ui';

interface Props {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
}

export const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  opacity: 1;
  z-index: 100;
  padding: 16px;
  position: fixed;
  animation: show 0.5s ease;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: ${(props: Props) => props.width ? props.width : 'auto'};
  height: ${(props: Props) => props.height ? props.height : 'auto'};
  max-width: ${(props: Props) => props.maxWidth && props.maxWidth};
  min-width: ${(props: Props) => props.minWidth && props.minWidth};
  background: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  position: relative;
  padding: 10px;

  @media(min-width: 480px) {
    padding: 30px;
  }
`;

export const ModalIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  align-self: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%;
  transition: .3s linear;
  z-index: 100;

  svg {
    color: ${COLORS.BLACK};
  }
`;
