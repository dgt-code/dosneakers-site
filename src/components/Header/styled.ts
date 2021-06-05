import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { COLORS } from 'src/ui';

export const Styled = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.ACCENT_BACKGROUND};
  color: ${COLORS.MAIN_BACKGROUND};
  padding: 8px 16px;
  box-sizing: border-box;
  position: relative;

  svg {
    cursor: pointer;
  }

  @media(min-width: 768px) {
    padding: 12px 24px;
  }
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 101;
  overflow-y: auto;
  width: 0;
  opacity: 0;
  background-color: ${COLORS.MAIN_BACKGROUND};
  transition: width 150ms ease-in-out, opacity 450ms ease-in-out;
`;

export const Checkbox = styled.input.attrs(() => ({
  id: 'checkMenu',
  type: 'checkbox'
}))`
  display: none;

  &:checked~${MenuWrapper} {
    width: 270px;
    opacity: 1;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  svg {
    padding: 2px;
    box-sizing: border-box;
  }
`;

export const AuthSessionWrapper = styled.div`
  display: none;

  @media(min-width: 768px) {
    display: block;
  }
`;

export const IconWrapper = styled.label.attrs(() => ({
  htmlFor: 'checkMenu'
}))`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 12px;

  @media(min-width: 768px) {
    display: none;
  }
`;

export const UserIconWrapper = styled.div`
  @media(min-width: 768px) {
    display: none;
  }
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
`;

export const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  opacity: 1;
  z-index: 100;
  position: fixed;
  animation: show 0.5s ease;
  overflow-x: hidden;
  overflow-y: auto;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`;

const ROOT = 'Header';
Styled.displayName = `${ROOT}/Styled`;
MenuWrapper.displayName = `${ROOT}/MenuWrapper`;
Checkbox.displayName = `${ROOT}/Checkbox`;
LogoWrapper.displayName = `${ROOT}/LogoWrapper`;
AuthSessionWrapper.displayName = `${ROOT}/AuthSessionWrapper`;
IconWrapper.displayName = `${ROOT}/IconWrapper`;
UserIconWrapper.displayName = `${ROOT}/UserIconWrapper`;
Overlay.displayName = `${ROOT}/Overlay`;
