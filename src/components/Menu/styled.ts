import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { COLORS } from 'src/ui';

export const Styled = styled.div`
  background-color: ${COLORS.MAIN_BACKGROUND};
  color: ${COLORS.BLACK};
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${COLORS.ACCENT_BACKGROUND};
  color: ${COLORS.MAIN_BACKGROUND};
  padding: 8px 16px;
  box-sizing: border-box;
`;

export const LinkStyled = styled(LinkRouter)`
  display: inline-flex;
`;

export const XIconWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg path {
    stroke: ${COLORS.MAIN_BACKGROUND};
  }
`;

export const AuthSessionItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 14px 16px;
  border-bottom: 1px solid #DDDDDD;
`;

export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid #DDDDDD;

  a {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    text-decoration: none;
    color: ${COLORS.BLACK};
    padding: 14px 16px;
    box-sizing: border-box;
  }
`;

const ROOT = 'Menu';
Styled.displayName = `${ROOT}/Styled`;
LogoWrapper.displayName = `${ROOT}/LogoWrapper`;
XIconWrapper.displayName = `${ROOT}/XIconWrapper`;
AuthSessionItem.displayName = `${ROOT}/AuthSessionItem`;
Item.displayName = `${ROOT}/Item`;
