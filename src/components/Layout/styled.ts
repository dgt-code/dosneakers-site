import styled from 'styled-components';
import { COLORS } from 'src/ui';

export const Styled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${COLORS.MAIN_BACKGROUND};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
  padding: 0 24px;
`;

const ROOT = 'Layout';
Main.displayName = 'Main';
Styled.displayName = `${ROOT}/Styled`;
Wrapper.displayName = `${ROOT}/Wrapper`;