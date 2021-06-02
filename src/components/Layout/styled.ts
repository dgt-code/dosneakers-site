import styled from 'styled-components';
import { COLORS } from 'src/ui';

export const Styled = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
  min-height: 100vh;
  background-color: ${COLORS.MAIN_BACKGROUND};
  color: ${COLORS.ACCENT_BACKGROUND};
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  @media(min-width: 768px) {
    padding: 0 24px;
  }
`;

const ROOT = 'Layout';
Main.displayName = 'Main';
Styled.displayName = `${ROOT}/Styled`;